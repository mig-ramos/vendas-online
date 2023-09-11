import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdatePasswordDTO } from './dtos/updatePassword.dto';
import { UserEntity } from './entities/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(createUserDto: CreateUserDto, userType?: number): Promise<UserEntity>;
    getUserByIdUsingRelations(userId: number): Promise<UserEntity>;
    getAllUser(): Promise<UserEntity[]>;
    findUserById(userId: number): Promise<UserEntity>;
    findUserByEmail(email: string): Promise<UserEntity>;
    updatePasswordUser(updatePasswordDTO: UpdatePasswordDTO, userId: number): Promise<UserEntity>;
}
