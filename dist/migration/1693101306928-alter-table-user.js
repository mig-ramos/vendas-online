"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterTableUser1675647448605 = void 0;
class alterTableUser1675647448605 {
    async up(queryRunner) {
        queryRunner.query(`
        alter table public.user add unique(email);
    `);
    }
    async down(queryRunner) {
        queryRunner.query(`
    `);
    }
}
exports.alterTableUser1675647448605 = alterTableUser1675647448605;
//# sourceMappingURL=1693101306928-alter-table-user.js.map