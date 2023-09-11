"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartProductMock = void 0;
const cart_mock_1 = require("../../cart/__mocks__/cart.mock");
const product_mock_1 = require("../../product/__mocks__/product.mock");
exports.cartProductMock = {
    amount: 5435,
    cartId: cart_mock_1.cartMock.id,
    createdAt: new Date(),
    id: 234,
    productId: product_mock_1.productMock.id,
    updatedAt: new Date(),
};
//# sourceMappingURL=cart-product.mock.js.map