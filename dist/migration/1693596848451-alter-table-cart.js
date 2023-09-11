"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterTableCart1675939002410 = void 0;
class alterTableCart1675939002410 {
    async up(queryRunner) {
        queryRunner.query(`
            ALTER TABLE cart ADD active boolean NOT NULL;
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            ALTER TABLE cart drop active;
        `);
    }
}
exports.alterTableCart1675939002410 = alterTableCart1675939002410;
//# sourceMappingURL=1693596848451-alter-table-cart.js.map