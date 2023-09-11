"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMock = void 0;
const address_mock_1 = require("../../address/__mocks__/address.mock");
const payment_mock_1 = require("../../payment/__mocks__/payment.mock");
const user_mock_1 = require("../../user/__mocks__/user.mock");
exports.orderMock = {
    addressId: address_mock_1.addressMock.id,
    createdAt: new Date(),
    date: new Date(),
    id: 453543,
    paymentId: payment_mock_1.paymentMock.id,
    updatedAt: new Date(),
    userId: user_mock_1.userEntityMock.id,
};
//# sourceMappingURL=order.mock.js.map