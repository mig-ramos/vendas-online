"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderCreditCardMock = exports.createOrderPixMock = void 0;
const payment_pix_mock_1 = require("../../payment/__mocks__/payment-pix.mock");
const address_mock_1 = require("../../address/__mocks__/address.mock");
const payment_credit_card_mock_1 = require("../../payment/__mocks__/payment-credit-card.mock");
exports.createOrderPixMock = {
    addressId: address_mock_1.addressMock.id,
    codePix: payment_pix_mock_1.paymentPixMock.code,
    datePayment: '2020-01-01',
};
exports.createOrderCreditCardMock = {
    addressId: address_mock_1.addressMock.id,
    amountPayments: payment_credit_card_mock_1.paymentCreditCardMock.amountPayments,
};
//# sourceMappingURL=create-order.mock.js.map