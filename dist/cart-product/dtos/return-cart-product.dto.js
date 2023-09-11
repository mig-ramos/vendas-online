"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnCartProductDTO = void 0;
const return_cart_dto_1 = require("../../cart/dtos/return-cart.dto");
const return_product_dto_1 = require("../../product/dtos/return-product.dto");
class ReturnCartProductDTO {
    constructor(cartProduct) {
        this.id = cartProduct.id;
        this.cartId = cartProduct.cartId;
        this.productId = cartProduct.productId;
        this.amount = cartProduct.amount;
        this.product = cartProduct.product
            ? new return_product_dto_1.ReturnProduct(cartProduct.product)
            : undefined;
        this.cart = cartProduct.cart
            ? new return_cart_dto_1.ReturnCartDTO(cartProduct.cart)
            : undefined;
    }
}
exports.ReturnCartProductDTO = ReturnCartProductDTO;
//# sourceMappingURL=return-cart-product.dto.js.map