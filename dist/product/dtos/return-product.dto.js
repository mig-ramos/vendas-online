"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnProduct = void 0;
const return_category_dto_1 = require("../../category/dtos/return-category.dto");
class ReturnProduct {
    constructor(productEntity) {
        this.id = productEntity.id;
        this.name = productEntity.name;
        this.price = productEntity.price;
        this.image = productEntity.image;
        this.weight = productEntity.weight;
        this.length = productEntity.length;
        this.height = productEntity.height;
        this.width = productEntity.width;
        this.diameter = productEntity.diameter;
        this.category = productEntity.category
            ? new return_category_dto_1.ReturnCategory(productEntity.category)
            : undefined;
    }
}
exports.ReturnProduct = ReturnProduct;
//# sourceMappingURL=return-product.dto.js.map