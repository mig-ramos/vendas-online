import { ReturnCartDTO } from '../../cart/dtos/return-cart.dto';
import { ReturnProduct } from '../../product/dtos/return-product.dto';
import { CartProductEntity } from '../entities/cart-product.entity';
export declare class ReturnCartProductDTO {
    id: number;
    cartId: number;
    productId: number;
    amount: number;
    product?: ReturnProduct;
    cart?: ReturnCartDTO;
    constructor(cartProduct: CartProductEntity);
}
