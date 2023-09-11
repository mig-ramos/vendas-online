"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertRootInUser1675770516768 = void 0;
class insertRootInUser1675770516768 {
    async up(queryRunner) {
        queryRunner.query(`
            INSERT INTO public."user"(
                name, email, cpf, type_user, phone, password)
                VALUES ('root', 'root@root.com', '12345678901', 2, '31925325252', '$2b$10$x5o.9DD17Q5G2yq8k6JZKu9w1ovR.1ra0LitNUDZLGi0/z1FdfpfK');
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            DELETE FROM public."user"
                WHERE email like 'root@root.com';
        `);
    }
}
exports.insertRootInUser1675770516768 = insertRootInUser1675770516768;
//# sourceMappingURL=1693280130082-insert-root-in-user.js.map