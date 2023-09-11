import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    getAllCitiesByStateId(stateId: number): Promise<CityEntity[]>;
}
