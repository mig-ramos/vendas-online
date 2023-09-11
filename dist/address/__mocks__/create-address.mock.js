"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAddressMock = void 0;
const city_mock_1 = require("../../city/__mocks__/city.mock");
const address_mock_1 = require("./address.mock");
exports.createAddressMock = {
    cep: address_mock_1.addressMock.cep,
    cityId: city_mock_1.cityMock.id,
    complement: address_mock_1.addressMock.complement,
    numberAddress: address_mock_1.addressMock.numberAddress,
};
//# sourceMappingURL=create-address.mock.js.map