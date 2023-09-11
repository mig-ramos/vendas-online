"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterTableState1675458729381 = void 0;
class alterTableState1675458729381 {
    async up(queryRunner) {
        queryRunner.query(`
            ALTER TABLE state
                ADD uf varchar(2) NOT NULL;
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            ALTER TABLE state
                drop uf;
        `);
    }
}
exports.alterTableState1675458729381 = alterTableState1675458729381;
//# sourceMappingURL=1692757418283-alter_table_state.js.map