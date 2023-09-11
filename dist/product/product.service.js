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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_service_1 = require("../category/category.service");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const size_product_dto_1 = require("../correios/dtos/size-product.dto");
const correios_service_1 = require("../correios/correios.service");
const cd_service_enum_1 = require("../correios/enums/cd-service.enum");
const return_price_delivery_dto_1 = require("./dtos/return-price-delivery.dto");
const pagination_dto_1 = require("../dtos/pagination.dto");
const DEFAULT_PAGE_SIZE = 10;
const FIRST_PAGE = 1;
let ProductService = exports.ProductService = class ProductService {
    constructor(productRepository, categoryService, correiosService) {
        this.productRepository = productRepository;
        this.categoryService = categoryService;
        this.correiosService = correiosService;
    }
    async findAllPage(search, size = DEFAULT_PAGE_SIZE, page = FIRST_PAGE) {
        const skip = (page - 1) * size;
        let findOptions = {};
        if (search) {
            findOptions = {
                where: {
                    name: (0, typeorm_2.ILike)(`%${search}%`),
                },
            };
        }
        const [products, total] = await this.productRepository.findAndCount({
            ...findOptions,
            take: size,
            skip,
        });
        return new pagination_dto_1.Pagination(new pagination_dto_1.PaginationMeta(Number(size), total, Number(page), Math.ceil(total / size)), products);
    }
    async findAll(productId, isFindRelations) {
        let findOptions = {};
        if (productId && productId.length > 0) {
            findOptions = {
                where: {
                    id: (0, typeorm_2.In)(productId),
                },
            };
        }
        if (isFindRelations) {
            findOptions = {
                ...findOptions,
                relations: {
                    category: true,
                },
            };
        }
        const products = await this.productRepository.find(findOptions);
        if (!products || products.length === 0) {
            throw new common_1.NotFoundException('Not found products');
        }
        return products;
    }
    async createProduct(createProduct) {
        await this.categoryService.findCategoryById(createProduct.categoryId);
        return this.productRepository.save({
            ...createProduct,
            weight: createProduct.weight || 0,
            width: createProduct.width || 0,
            length: createProduct.length || 0,
            diameter: createProduct.diameter || 0,
            height: createProduct.height || 0,
        });
    }
    async findProductById(productId, isRelations) {
        const relations = isRelations
            ? {
                category: true,
            }
            : undefined;
        const product = await this.productRepository.findOne({
            where: {
                id: productId,
            },
            relations,
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product id: ${productId} not found`);
        }
        return product;
    }
    async deleteProduct(productId) {
        await this.findProductById(productId);
        return this.productRepository.delete({ id: productId });
    }
    async updateProduct(updateProduct, productId) {
        const product = await this.findProductById(productId);
        return this.productRepository.save({
            ...product,
            ...updateProduct,
        });
    }
    async countProdutsByCategoryId() {
        return this.productRepository
            .createQueryBuilder('product')
            .select('product.category_id, COUNT(*) as total')
            .groupBy('product.category_id')
            .getRawMany();
    }
    async findPriceDelivery(cep, idProduct) {
        const product = await this.findProductById(idProduct);
        const sizeProduct = new size_product_dto_1.SizeProductDTO(product);
        const resultPrice = await Promise.all([
            this.correiosService.priceDelivery(cd_service_enum_1.CdServiceEnum.PAC, cep, sizeProduct),
            this.correiosService.priceDelivery(cd_service_enum_1.CdServiceEnum.SEDEX, cep, sizeProduct),
            this.correiosService.priceDelivery(cd_service_enum_1.CdServiceEnum.SEDEX_10, cep, sizeProduct),
        ]).catch(() => {
            throw new common_1.BadRequestException('Error find delivery price');
        });
        return new return_price_delivery_dto_1.ReturnPriceDeliveryDto(resultPrice);
    }
};
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.ProductEntity)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => category_service_1.CategoryService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        category_service_1.CategoryService,
        correios_service_1.CorreiosService])
], ProductService);
//# sourceMappingURL=product.service.js.map