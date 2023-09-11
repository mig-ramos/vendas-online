"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertStatus1676323439062 = void 0;
class insertStatus1676323439062 {
    async up(queryRunner) {
        queryRunner.query(`
            INSERT INTO public.payment_status(id, name)	VALUES (1, 'Done');
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            DELETE FROM public.payment_status WHERE id = 1;
        `);
    }
}
exports.insertStatus1676323439062 = insertStatus1676323439062;
//# sourceMappingURL=1693847801591-insert-status.js.map