import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { Auth } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}
  async login(email: string, password: string): Promise<Auth> {
    const user = await this.prisma.user.findUnique({ where: { email: email } });

    if (!user) {
      throw new NotFoundException(`No users found for email: ${email}`);
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    return {
      user: user.email,
      accesToken: this.jwtService.sign({ userId: user.id }),
    };
  }
  validateUser(userId: string) {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  async register(email: string, password: string): Promise<Auth> {
    const user = await this.prisma.user.findUnique({ where: { email: email } });

    if (user) {
      throw new ConflictException('User with this emaail egsist');
    }
    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);

    await this.prisma.user.create({
      data: {
        email: email,
        password: hashPassword,
      },
    });

    const newUser = await this.prisma.user.findUnique({
      where: { email: email },
    });
    return {
      user: newUser.email,
      accesToken: this.jwtService.sign({ userId: newUser.id }),
    };
  }
}
