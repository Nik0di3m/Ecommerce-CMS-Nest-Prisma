import { Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private auth;
    constructor(auth: AuthService);
    validate(payload: {
        userId: string;
    }): Promise<import(".prisma/client").User>;
}
export {};
