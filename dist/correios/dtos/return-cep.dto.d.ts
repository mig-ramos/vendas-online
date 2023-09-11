import { ReturnCepExternal } from './return-cep-external.dto';
export declare class ReturnCep {
    cep: string;
    publicPlace: string;
    complement: string;
    neighborhood: string;
    city: string;
    uf: string;
    ddd: string;
    cityId?: number;
    stateId?: number;
    constructor(returnCep: ReturnCepExternal, cityId?: number, stateId?: number);
}
