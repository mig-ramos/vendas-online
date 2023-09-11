import { ReturnAddressDto } from '../../address/dtos/returnAddress.dto';
import { UserEntity } from '../entities/user.entity';
export declare class ReturnUserDto {
    id: number;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    addresses?: ReturnAddressDto[];
    constructor(userEntity: UserEntity);
}
