import { CityEntity } from '../../city/entities/city.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { OrderEntity } from '../../order/entities/order.entity';
export declare class AddressEntity {
    id: number;
    userId: number;
    complement: string;
    numberAddress: number;
    cep: string;
    cityId: number;
    createdAt: Date;
    updatedAt: Date;
    user?: UserEntity;
    city?: CityEntity;
    orders?: OrderEntity[];
}
