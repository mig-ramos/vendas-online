import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginDto } from './dtos/login.dto';
import { ReturnLogin } from './dtos/returnLogin.dto';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<ReturnLogin>;
}
