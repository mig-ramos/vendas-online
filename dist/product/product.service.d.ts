import { CategoryService } from '../category/category.service';
import { DeleteResult, Repository } from 'typeorm';
import { CreateProductDTO } from './dtos/create-product.dto';
import { ProductEntity } from './entities/product.entity';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { CountProduct } from './dtos/count-product.dto';
import { CorreiosService } from '../correios/correios.service';
import { Pagination } from '../dtos/pagination.dto';
export declare class ProductService {
    private readonly productRepository;
    private readonly categoryService;
    private readonly correiosService;
    constructor(productRepository: Repository<ProductEntity>, categoryService: CategoryService, correiosService: CorreiosService);
    findAllPage(search?: string, size?: number, page?: number): Promise<Pagination<ProductEntity[]>>;
    findAll(productId?: number[], isFindRelations?: boolean): Promise<ProductEntity[]>;
    createProduct(createProduct: CreateProductDTO): Promise<ProductEntity>;
    findProductById(productId: number, isRelations?: boolean): Promise<ProductEntity>;
    deleteProduct(productId: number): Promise<DeleteResult>;
    updateProduct(updateProduct: UpdateProductDTO, productId: number): Promise<ProductEntity>;
    countProdutsByCategoryId(): Promise<CountProduct[]>;
    findPriceDelivery(cep: string, idProduct: number): Promise<any>;
}
