"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnOrderProductDTO = void 0;
const return_order_dto_1 = require("../../order/dtos/return-order.dto");
const return_product_dto_1 = require("../../product/dtos/return-product.dto");
class ReturnOrderProductDTO {
    constructor(orderProduct) {
        this.id = orderProduct.id;
        this.orderId = orderProduct.orderId;
        this.productId = orderProduct.productId;
        this.amount = orderProduct.amount;
        this.price = orderProduct.price;
        this.order = orderProduct.order
            ? new return_order_dto_1.ReturnOrderDTO(orderProduct.order)
            : undefined;
        this.product = orderProduct.product
            ? new return_product_dto_1.ReturnProduct(orderProduct.product)
            : undefined;
    }
}
exports.ReturnOrderProductDTO = ReturnOrderProductDTO;
//# sourceMappingURL=return-order-product.dto.js.map