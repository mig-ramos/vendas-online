"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeProductDTO = void 0;
class SizeProductDTO {
    constructor(product) {
        this.weight = product.weight;
        this.length = product.length;
        this.height = product.height;
        this.width = product.width;
        this.diameter = product.diameter;
        this.productValue = product.price;
    }
}
exports.SizeProductDTO = SizeProductDTO;
//# sourceMappingURL=size-product.dto.js.map