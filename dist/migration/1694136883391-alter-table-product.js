"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterTableProduct1678189577114 = void 0;
class alterTableProduct1678189577114 {
    async up(queryRunner) {
        queryRunner.query(`
            ALTER TABLE "product" ADD "weight" double precision NOT NULL DEFAULT 0;
            ALTER TABLE "product" ADD "length" integer NOT NULL DEFAULT 0;
            ALTER TABLE "product" ADD "height" integer NOT NULL DEFAULT 0;
            ALTER TABLE "product" ADD "width" integer NOT NULL DEFAULT 0;
            ALTER TABLE "product" ADD "diameter" integer NOT NULL DEFAULT 0;
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            ALTER TABLE "product" drop "weight";
            ALTER TABLE "product" drop "length";
            ALTER TABLE "product" drop "height";
            ALTER TABLE "product" drop "width";
            ALTER TABLE "product" drop "diameter";
        `);
    }
}
exports.alterTableProduct1678189577114 = alterTableProduct1678189577114;
//# sourceMappingURL=1694136883391-alter-table-product.js.map