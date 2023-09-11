import { ReturnStateDto } from '../../state/dtos/returnState.dto';
import { CityEntity } from '../entities/city.entity';
export declare class ReturnCityDto {
    name: string;
    state?: ReturnStateDto;
    constructor(city: CityEntity);
}
