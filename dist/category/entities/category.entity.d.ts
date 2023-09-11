import { ProductEntity } from '../../product/entities/product.entity';
export declare class CategoryEntity {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    products?: ProductEntity[];
}
