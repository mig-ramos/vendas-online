import { StateEntity } from './entities/state.entity';
import { StateService } from './state.service';
export declare class StateController {
    private readonly stateService;
    constructor(stateService: StateService);
    getAllState(): Promise<StateEntity[]>;
}
