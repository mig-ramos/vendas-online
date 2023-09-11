import { HttpService } from '@nestjs/axios';
import { CityService } from '../city/city.service';
import { ReturnCep } from './dtos/return-cep.dto';
import { Client } from 'nestjs-soap';
import { ResponsePriceCorreios } from './dtos/response-price-correios';
import { SizeProductDTO } from './dtos/size-product.dto';
export declare class CorreiosService {
    private readonly soapClient;
    private readonly httpService;
    private readonly cityService;
    URL_CORREIOS: string;
    CEP_COMPANY: string;
    constructor(soapClient: Client, httpService: HttpService, cityService: CityService);
    findAddressByCep(cep: string): Promise<ReturnCep>;
    priceDelivery(cdService: string, cep: string, sizeProduct: SizeProductDTO): Promise<ResponsePriceCorreios>;
}
