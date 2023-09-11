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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_type_enum_1 = require("../user/enum/user-type.enum");
const create_product_dto_1 = require("./dtos/create-product.dto");
const update_product_dto_1 = require("./dtos/update-product.dto");
const return_product_dto_1 = require("./dtos/return-product.dto");
const product_service_1 = require("./product.service");
let ProductController = exports.ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async findAll() {
        return (await this.productService.findAll([], true)).map((product) => new return_product_dto_1.ReturnProduct(product));
    }
    async findAllPage(search, size, page) {
        return this.productService.findAllPage(search, size, page);
    }
    async findProductById(productId) {
        return new return_product_dto_1.ReturnProduct(await this.productService.findProductById(productId, true));
    }
    async createProduct(createProduct) {
        return this.productService.createProduct(createProduct);
    }
    async deleteProduct(productId) {
        return this.productService.deleteProduct(productId);
    }
    async updateProduct(updateProduct, productId) {
        return this.productService.updateProduct(updateProduct, productId);
    }
    async findPriceDelivery(idProduct, cep) {
        return this.productService.findPriceDelivery(cep, idProduct);
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root, user_type_enum_1.UserType.User),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root, user_type_enum_1.UserType.User),
    (0, common_1.Get)('/page'),
    __param(0, (0, common_1.Query)('search')),
    __param(1, (0, common_1.Query)('size')),
    __param(2, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAllPage", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root, user_type_enum_1.UserType.User),
    (0, common_1.Get)('/:productId'),
    __param(0, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findProductById", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root),
    (0, common_1.Delete)('/:productId'),
    __param(0, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Put)('/:productId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_dto_1.UpdateProductDTO, Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Get)('/:idProduct/delivery/:cep'),
    __param(0, (0, common_1.Param)('idProduct')),
    __param(1, (0, common_1.Param)('cep')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findPriceDelivery", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map