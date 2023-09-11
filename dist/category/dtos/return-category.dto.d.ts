import { ReturnProduct } from '../../product/dtos/return-product.dto';
import { CategoryEntity } from '../entities/category.entity';
export declare class ReturnCategory {
    id: number;
    name: string;
    amountProducts?: number;
    products?: ReturnProduct[];
    constructor(categoryEntity: CategoryEntity, amountProducts?: number);
}
