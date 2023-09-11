import { ReturnCityDto } from '../../city/dtos/rreturnCity.dto';
import { AddressEntity } from '../entities/address.entity';
export declare class ReturnAddressDto {
    id: number;
    complement: string;
    numberAddress: number;
    cep: string;
    city?: ReturnCityDto;
    constructor(address: AddressEntity);
}
