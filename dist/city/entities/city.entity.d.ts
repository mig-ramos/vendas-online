import { AddressEntity } from '../../address/entities/address.entity';
import { StateEntity } from '../../state/entities/state.entity';
export declare class CityEntity {
    id: number;
    stateId: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    addresses?: AddressEntity[];
    state?: StateEntity;
}
