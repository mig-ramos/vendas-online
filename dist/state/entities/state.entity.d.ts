import { CityEntity } from '../../city/entities/city.entity';
export declare class StateEntity {
    id: number;
    name: string;
    uf: string;
    createdAt: Date;
    updatedAt: Date;
    cities?: CityEntity[];
}
