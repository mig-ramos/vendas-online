import { CacheService } from '../cache/cache.service';
import { Repository } from 'typeorm';
import { CityEntity } from './entities/city.entity';
export declare class CityService {
    private readonly cityRepository;
    private readonly cacheService;
    constructor(cityRepository: Repository<CityEntity>, cacheService: CacheService);
    getAllCitiesByStateId(stateId: number): Promise<CityEntity[]>;
    findCityById(cityId: number): Promise<CityEntity>;
    findCityByName(nameCity: string, nameState: string): Promise<CityEntity>;
}
