import { UserType } from '../user/enum/user-type.enum';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: UserType[]) => import("@nestjs/common").CustomDecorator<string>;
