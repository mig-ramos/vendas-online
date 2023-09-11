import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { ReturnAddressDto } from './dtos/returnAddress.dto';
import { AddressEntity } from './entities/address.entity';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    createAddress(createAddressDto: CreateAddressDto, userId: number): Promise<AddressEntity>;
    findAddressByUserId(userId: number): Promise<ReturnAddressDto[]>;
}
