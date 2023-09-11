"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnPaymentDTO = void 0;
const return_payment_status_dto_1 = require("../../payment-status/dtos/return-payment-status.dto");
class ReturnPaymentDTO {
    constructor(payment) {
        this.id = payment.id;
        this.statusId = payment.statusId;
        this.price = payment.price;
        this.discount = payment.discount;
        this.finalPrice = payment.finalPrice;
        this.type = payment.type;
        this.paymentStatus = payment.paymentStatus
            ? new return_payment_status_dto_1.ReturnPaymentStatus(payment.paymentStatus)
            : undefined;
    }
}
exports.ReturnPaymentDTO = ReturnPaymentDTO;
//# sourceMappingURL=return-payment.dto.js.map