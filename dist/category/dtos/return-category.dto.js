"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnCategory = void 0;
const return_product_dto_1 = require("../../product/dtos/return-product.dto");
class ReturnCategory {
    constructor(categoryEntity, amountProducts) {
        this.id = categoryEntity.id;
        this.name = categoryEntity.name;
        this.amountProducts = amountProducts;
        this.products = categoryEntity.products
            ? categoryEntity.products.map((product) => new return_product_dto_1.ReturnProduct(product))
            : undefined;
    }
}
exports.ReturnCategory = ReturnCategory;
//# sourceMappingURL=return-category.dto.js.map