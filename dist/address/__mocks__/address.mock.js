"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressMock = void 0;
const city_mock_1 = require("../../city/__mocks__/city.mock");
const user_mock_1 = require("../../user/__mocks__/user.mock");
exports.addressMock = {
    cep: '43253252',
    cityId: city_mock_1.cityMock.id,
    complement: 'llkdfja',
    createdAt: new Date(),
    id: 57546,
    numberAddress: 654,
    updatedAt: new Date(),
    userId: user_mock_1.userEntityMock.id,
};
//# sourceMappingURL=address.mock.js.map