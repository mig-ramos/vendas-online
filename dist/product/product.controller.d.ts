import { Pagination } from '../dtos/pagination.dto';
import { DeleteResult } from 'typeorm';
import { CreateProductDTO } from './dtos/create-product.dto';
import { ReturnPriceDeliveryDto } from './dtos/return-price-delivery.dto';
import { ProductEntity } from './entities/product.entity';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { ReturnProduct } from './dtos/return-product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<ReturnProduct[]>;
    findAllPage(search?: string, size?: number, page?: number): Promise<Pagination<ReturnProduct[]>>;
    findProductById(productId: any): Promise<ReturnProduct>;
    createProduct(createProduct: CreateProductDTO): Promise<ProductEntity>;
    deleteProduct(productId: number): Promise<DeleteResult>;
    updateProduct(updateProduct: UpdateProductDTO, productId: number): Promise<ProductEntity>;
    findPriceDelivery(idProduct: number, cep: string): Promise<ReturnPriceDeliveryDto>;
}
