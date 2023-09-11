"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnCartDTO = void 0;
const return_cart_product_dto_1 = require("../../cart-product/dtos/return-cart-product.dto");
class ReturnCartDTO {
    constructor(cart) {
        this.id = cart.id;
        this.cartProduct = cart.cartProduct
            ? cart.cartProduct.map((cartProduct) => new return_cart_product_dto_1.ReturnCartProductDTO(cartProduct))
            : undefined;
    }
}
exports.ReturnCartDTO = ReturnCartDTO;
//# sourceMappingURL=return-cart.dto.js.map