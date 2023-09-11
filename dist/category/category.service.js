"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_service_1 = require("../product/product.service");
const typeorm_2 = require("typeorm");
const return_category_dto_1 = require("./dtos/return-category.dto");
const category_entity_1 = require("./entities/category.entity");
let CategoryService = exports.CategoryService = class CategoryService {
    constructor(categoryRepository, productService) {
        this.categoryRepository = categoryRepository;
        this.productService = productService;
    }
    findAmountCategoryInProducts(category, countList) {
        const count = countList.find((itemCount) => itemCount.category_id === category.id);
        if (count) {
            return count.total;
        }
        return 0;
    }
    async findAllCategories() {
        const categories = await this.categoryRepository.find();
        const count = await this.productService.countProdutsByCategoryId();
        if (!categories || categories.length === 0) {
            throw new common_1.NotFoundException('Categories empty');
        }
        return categories.map((category) => new return_category_dto_1.ReturnCategory(category, this.findAmountCategoryInProducts(category, count)));
    }
    async findCategoryById(categoryId, isRelations) {
        const relations = isRelations
            ? {
                products: true,
            }
            : undefined;
        const category = await this.categoryRepository.findOne({
            where: {
                id: categoryId,
            },
            relations,
        });
        if (!category) {
            throw new common_1.NotFoundException(`Category name ${name} not found`);
        }
        return category;
    }
    async findCategoryByName(name) {
        const category = await this.categoryRepository.findOne({
            where: {
                name,
            },
        });
        if (!category) {
            throw new common_1.NotFoundException(`Category name ${name} not found`);
        }
        return category;
    }
    async createCategory(createCategory) {
        const category = await this.findCategoryByName(createCategory.name).catch(() => undefined);
        if (category) {
            throw new common_1.BadRequestException(`Category name ${createCategory.name} exist`);
        }
        return this.categoryRepository.save(createCategory);
    }
    async deleteCategory(categoryId) {
        const category = await this.findCategoryById(categoryId, true);
        if (category.products?.length > 0) {
            throw new common_1.BadRequestException('Category with relations.');
        }
        return this.categoryRepository.delete({ id: categoryId });
    }
    async editCategory(categoryId, updateCategory) {
        const category = await this.findCategoryById(categoryId);
        return this.categoryRepository.save({
            ...category,
            ...updateCategory,
        });
    }
};
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => product_service_1.ProductService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        product_service_1.ProductService])
], CategoryService);
//# sourceMappingURL=category.service.js.map