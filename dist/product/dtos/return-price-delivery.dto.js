"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnPriceDeliveryDto = void 0;
class ReturnPriceDeliveryDto {
    constructor(priceCorreios) {
        this.delivery = priceCorreios
            .filter((priceCorreio) => priceCorreio.CalcPrecoPrazoResult?.Servicos?.cServico[0]?.Erro ===
            '0')
            .map((priceCorreio) => ({
            deliveryPrice: Number(priceCorreio.CalcPrecoPrazoResult?.Servicos?.cServico[0]?.Valor.replace(',', '.')),
            deliveryTime: Number(priceCorreio.CalcPrecoPrazoResult?.Servicos?.cServico[0]
                ?.PrazoEntrega),
            typeDelivery: priceCorreio.CalcPrecoPrazoResult?.Servicos?.cServico[0]?.Codigo,
        }));
    }
}
exports.ReturnPriceDeliveryDto = ReturnPriceDeliveryDto;
//# sourceMappingURL=return-price-delivery.dto.js.map