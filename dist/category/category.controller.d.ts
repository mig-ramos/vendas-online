import { DeleteResult } from 'typeorm';
import { CategoryService } from './category.service';
import { CreateCategory } from './dtos/create-category.dto';
import { ReturnCategory } from './dtos/return-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { UpdateCategory } from './dtos/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    findAllCategories(): Promise<ReturnCategory[]>;
    createCategory(createCategory: CreateCategory): Promise<CategoryEntity>;
    deleteCategory(categoryId: number): Promise<DeleteResult>;
    editCategory(categoryId: number, updateCategory: UpdateCategory): Promise<CategoryEntity>;
    findCategoryById(categoryId: number): Promise<ReturnCategory>;
}
