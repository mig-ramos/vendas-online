import { CreateUserDto } from './dtos/createUser.dto';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { UpdatePasswordDTO } from './dtos/updatePassword.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createAdmin(createUser: CreateUserDto): Promise<UserEntity>;
    createUser(createUser: CreateUserDto): Promise<UserEntity>;
    getAllUser(): Promise<ReturnUserDto[]>;
    getUserById(userId: number): Promise<ReturnUserDto>;
    updatePasswordUser(updatePasswordDTO: UpdatePasswordDTO, userId: number): Promise<UserEntity>;
    getInfoUser(userId: number): Promise<ReturnUserDto>;
}
