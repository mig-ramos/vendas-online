import { CartProductService } from '../cart-product/cart-product.service';
import { DeleteResult, Repository } from 'typeorm';
import { InsertCartDTO } from './dtos/insert-cart.dto';
import { UpdateCartDTO } from './dtos/update-cart.dto';
import { CartEntity } from './entities/cart.entity';
export declare class CartService {
    private readonly cartRepository;
    private readonly cartProductService;
    constructor(cartRepository: Repository<CartEntity>, cartProductService: CartProductService);
    clearCart(userId: number): Promise<DeleteResult>;
    findCartByUserId(userId: number, isRelations?: boolean): Promise<CartEntity>;
    createCart(userId: number): Promise<CartEntity>;
    insertProductInCart(insertCartDTO: InsertCartDTO, userId: number): Promise<CartEntity>;
    deleteProductCart(productId: number, userId: number): Promise<DeleteResult>;
    updateProductInCart(updateCartDTO: UpdateCartDTO, userId: number): Promise<CartEntity>;
}
