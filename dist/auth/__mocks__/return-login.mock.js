"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnLoginMock = void 0;
const user_mock_1 = require("../../user/__mocks__/user.mock");
const jwt_mock_1 = require("./jwt.mock");
exports.returnLoginMock = {
    accessToken: jwt_mock_1.jwtMock,
    user: user_mock_1.userEntityMock,
};
//# sourceMappingURL=return-login.mock.js.map