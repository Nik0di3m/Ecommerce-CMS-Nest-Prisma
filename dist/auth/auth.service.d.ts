import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { Auth } from './entity/auth.entity';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(email: string, password: string): Promise<Auth>;
    validateUser(userId: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    register(email: string, password: string): Promise<Auth>;
}
