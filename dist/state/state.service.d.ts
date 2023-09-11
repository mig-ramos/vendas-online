import { Repository } from 'typeorm';
import { StateEntity } from './entities/state.entity';
export declare class StateService {
    private readonly stateRepository;
    constructor(stateRepository: Repository<StateEntity>);
    getAllState(): Promise<StateEntity[]>;
}
