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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_type_enum_1 = require("../user/enum/user-type.enum");
const category_service_1 = require("./category.service");
const create_category_dto_1 = require("./dtos/create-category.dto");
const return_category_dto_1 = require("./dtos/return-category.dto");
const update_category_dto_1 = require("./dtos/update-category.dto");
let CategoryController = exports.CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async findAllCategories() {
        return this.categoryService.findAllCategories();
    }
    async createCategory(createCategory) {
        return this.categoryService.createCategory(createCategory);
    }
    async deleteCategory(categoryId) {
        return this.categoryService.deleteCategory(categoryId);
    }
    async editCategory(categoryId, updateCategory) {
        return this.categoryService.editCategory(categoryId, updateCategory);
    }
    async findCategoryById(categoryId) {
        return new return_category_dto_1.ReturnCategory(await this.categoryService.findCategoryById(categoryId, true));
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAllCategories", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategory]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root),
    (0, common_1.Delete)(':categoryId'),
    __param(0, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCategory", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Put)(':categoryId'),
    __param(0, (0, common_1.Param)('categoryId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_category_dto_1.UpdateCategory]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "editCategory", null);
__decorate([
    (0, common_1.Get)(':categoryId'),
    __param(0, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findCategoryById", null);
exports.CategoryController = CategoryController = __decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root, user_type_enum_1.UserType.User),
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map