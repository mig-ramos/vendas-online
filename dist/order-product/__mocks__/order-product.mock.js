"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProductMock = void 0;
const product_mock_1 = require("../../product/__mocks__/product.mock");
const order_mock_1 = require("../../order/__mocks__/order.mock");
exports.orderProductMock = {
    amount: 543,
    createdAt: new Date(),
    id: 45543,
    orderId: order_mock_1.orderMock.id,
    price: 543.4,
    productId: product_mock_1.productMock.id,
    updatedAt: new Date(),
};
//# sourceMappingURL=order-product.mock.js.map