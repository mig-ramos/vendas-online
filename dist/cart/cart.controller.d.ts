import { DeleteResult } from 'typeorm';
import { CartService } from './cart.service';
import { InsertCartDTO } from './dtos/insert-cart.dto';
import { ReturnCartDTO } from './dtos/return-cart.dto';
import { UpdateCartDTO } from './dtos/update-cart.dto';
import { Response } from 'express';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    createCart(insertCart: InsertCartDTO, userId: number): Promise<ReturnCartDTO>;
    findCartByUserId(userId: number, res?: Response): Promise<ReturnCartDTO>;
    clearCart(userId: number): Promise<DeleteResult>;
    deleteProductCart(productId: number, userId: number): Promise<DeleteResult>;
    updateProductInCart(updateCartDTO: UpdateCartDTO, userId: number): Promise<ReturnCartDTO>;
}
