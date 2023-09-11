import { CorreiosService } from './correios.service';
import { ReturnCep } from './dtos/return-cep.dto';
export declare class CorreiosController {
    private readonly correiosService;
    constructor(correiosService: CorreiosService);
    findAll(cep: string): Promise<ReturnCep>;
}
