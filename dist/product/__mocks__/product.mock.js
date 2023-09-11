"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productPaginationMock = exports.productMock = void 0;
const category_mock_1 = require("../../category/__mocks__/category.mock");
exports.productMock = {
    categoryId: category_mock_1.categoryMock.id,
    createdAt: new Date(),
    id: 7435,
    image: 'http://image.com',
    name: 'name product mock',
    price: 34.3,
    updatedAt: new Date(),
    diameter: 2,
    height: 43,
    length: 5,
    weight: 4,
    width: 2,
};
exports.productPaginationMock = {
    data: [exports.productMock],
    meta: {
        currentPage: 1,
        itemsPerPage: 10,
        totalItems: 10,
        totalPages: 1,
    },
};
//# sourceMappingURL=product.mock.js.map