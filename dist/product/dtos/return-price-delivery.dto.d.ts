import { ResponsePriceCorreios } from '../../correios/dtos/response-price-correios';
interface ReturnDelivery {
    deliveryTime: number;
    deliveryPrice: number;
    typeDelivery: number;
}
export declare class ReturnPriceDeliveryDto {
    delivery: ReturnDelivery[];
    constructor(priceCorreios: ResponsePriceCorreios[]);
}
export {};
