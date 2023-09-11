import { CountProduct } from '../product/dtos/count-product.dto';
import { ProductService } from '../product/product.service';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCategory } from './dtos/create-category.dto';
import { ReturnCategory } from './dtos/return-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { UpdateCategory } from './dtos/update-category.dto';
export declare class CategoryService {
    private readonly categoryRepository;
    private readonly productService;
    constructor(categoryRepository: Repository<CategoryEntity>, productService: ProductService);
    findAmountCategoryInProducts(category: CategoryEntity, countList: CountProduct[]): number;
    findAllCategories(): Promise<ReturnCategory[]>;
    findCategoryById(categoryId: number, isRelations?: boolean): Promise<CategoryEntity>;
    findCategoryByName(name: string): Promise<CategoryEntity>;
    createCategory(createCategory: CreateCategory): Promise<CategoryEntity>;
    deleteCategory(categoryId: number): Promise<DeleteResult>;
    editCategory(categoryId: number, updateCategory: UpdateCategory): Promise<CategoryEntity>;
}
