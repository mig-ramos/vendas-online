import { CityService } from '../city/city.service';
import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';
export declare class AddressService {
    private readonly addressRepository;
    private readonly userService;
    private readonly cityService;
    constructor(addressRepository: Repository<AddressEntity>, userService: UserService, cityService: CityService);
    createAddress(createAddressDto: CreateAddressDto, userId: number): Promise<AddressEntity>;
    findAddressByUserId(userId: number): Promise<AddressEntity[]>;
}
