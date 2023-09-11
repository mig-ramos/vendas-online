"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterTablePayment1676323446877 = void 0;
class alterTablePayment1676323446877 {
    async up(queryRunner) {
        queryRunner.query(`
            alter table public.payment alter column amount_payments drop not null;
            alter table public.payment alter column code drop not null;
            alter table public.payment alter column date_payment drop not null;
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
        `);
    }
}
exports.alterTablePayment1676323446877 = alterTablePayment1676323446877;
//# sourceMappingURL=1693847936711-alter-table-payment.js.map