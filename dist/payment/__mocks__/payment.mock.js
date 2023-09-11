"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentMock = void 0;
const payment_type_enum_1 = require("../../payment-status/enums/payment-type.enum");
exports.paymentMock = {
    createdAt: new Date(),
    discount: 432,
    finalPrice: 64365.4,
    id: 52358,
    price: 32532.0,
    statusId: payment_type_enum_1.PaymentType.Done,
    updatedAt: new Date(),
    type: '',
};
//# sourceMappingURL=payment.mock.js.map