import { AddressEntity } from '../../address/entities/address.entity';
import { OrderEntity } from '../../order/entities/order.entity';
export declare class UserEntity {
    id: number;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
    typeUser: number;
    createdAt: Date;
    updatedAt: Date;
    addresses?: AddressEntity[];
    orders?: OrderEntity[];
}
