import { InsertCartDTO } from '../cart/dtos/insert-cart.dto';
import { UpdateCartDTO } from '../cart/dtos/update-cart.dto';
import { CartEntity } from '../cart/entities/cart.entity';
import { ProductService } from '../product/product.service';
import { DeleteResult, Repository } from 'typeorm';
import { CartProductEntity } from './entities/cart-product.entity';
export declare class CartProductService {
    private readonly cartProductRepository;
    private readonly productService;
    constructor(cartProductRepository: Repository<CartProductEntity>, productService: ProductService);
    verifyProductInCart(productId: number, cartId: number): Promise<CartProductEntity>;
    createProductInCart(insertCartDTO: InsertCartDTO, cartId: number): Promise<CartProductEntity>;
    insertProductInCart(insertCartDTO: InsertCartDTO, cart: CartEntity): Promise<CartProductEntity>;
    updateProductInCart(updateCartDTO: UpdateCartDTO, cart: CartEntity): Promise<CartProductEntity>;
    deleteProductCart(productId: number, cartId: number): Promise<DeleteResult>;
}
