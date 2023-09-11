import { ReturnCartProductDTO } from '../../cart-product/dtos/return-cart-product.dto';
import { CartEntity } from '../entities/cart.entity';
export declare class ReturnCartDTO {
    id: number;
    cartProduct?: ReturnCartProductDTO[];
    constructor(cart: CartEntity);
}
