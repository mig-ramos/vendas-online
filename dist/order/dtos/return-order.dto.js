"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnOrderDTO = void 0;
const return_order_product_dto_1 = require("../../order-product/dtos/return-order-product.dto");
const returnAddress_dto_1 = require("../../address/dtos/returnAddress.dto");
const return_payment_dto_1 = require("../../payment/dtos/return-payment.dto");
const returnUser_dto_1 = require("../../user/dtos/returnUser.dto");
class ReturnOrderDTO {
    constructor(order) {
        this.id = order?.id;
        this.date = order?.date.toString();
        this.userId = order?.userId;
        this.addressId = order?.addressId;
        this.paymentId = order?.paymentId;
        this.user = order?.user ? new returnUser_dto_1.ReturnUserDto(order?.user) : undefined;
        this.address = order?.address
            ? new returnAddress_dto_1.ReturnAddressDto(order?.address)
            : undefined;
        this.payment = order?.payment
            ? new return_payment_dto_1.ReturnPaymentDTO(order?.payment)
            : undefined;
        this.ordersProduct = order?.ordersProduct
            ? order?.ordersProduct.map((orderProduct) => new return_order_product_dto_1.ReturnOrderProductDTO(orderProduct))
            : undefined;
        this.amountProducts = order?.amountProducts;
    }
}
exports.ReturnOrderDTO = ReturnOrderDTO;
//# sourceMappingURL=return-order.dto.js.map