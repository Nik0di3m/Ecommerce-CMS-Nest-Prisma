import { AuthService } from './auth.service';
import { LoginDTO } from './dto/Login.dto';
import { Auth } from './entity/auth.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login({ email, password }: LoginDTO): Promise<Auth>;
    create({ email, password }: LoginDTO): Promise<Auth>;
}
