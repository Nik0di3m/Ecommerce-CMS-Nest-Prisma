import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/Login.dto';
import { Auth } from './entity/auth.entity';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: Auth })
  login(@Body() { email, password }: LoginDTO) {
    return this.authService.login(email, password);
  }
  @Post('register')
  @ApiOkResponse({ type: Auth })
  create(@Body() { email, password }: LoginDTO) {
    return this.authService.register(email, password);
  }
}
