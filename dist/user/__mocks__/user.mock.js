"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEntityMock = void 0;
const user_type_enum_1 = require("../enum/user-type.enum");
exports.userEntityMock = {
    cpf: '123543543',
    createdAt: new Date(),
    email: 'emailmock@emali.com',
    id: 43242,
    name: 'nameMock',
    password: '$2b$10$S62WmVpIxL52Z.0y22DWfuaAz8.XUNESChWP.AlMFZnOJ9n9uiqi.',
    phone: '321532523532',
    typeUser: user_type_enum_1.UserType.User,
    updatedAt: new Date(),
};
//# sourceMappingURL=user.mock.js.map