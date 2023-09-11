"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentPixMock = void 0;
const payment_mock_1 = require("./payment.mock");
exports.paymentPixMock = {
    ...payment_mock_1.paymentMock,
    code: 'fdsafdsa',
    datePayment: new Date('2020-01-01'),
};
//# sourceMappingURL=payment-pix.mock.js.map