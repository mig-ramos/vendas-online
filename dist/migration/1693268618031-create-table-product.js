"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableProduct1675766857443 = void 0;
class createTableProduct1675766857443 {
    async up(queryRunner) {
        queryRunner.query(`
            CREATE TABLE public.product (
                id integer NOT NULL,
                category_id integer NOT NULL,
                name character varying NOT NULL,
                price double precision NOT NULL,
                image character varying NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id),
                foreign key (category_id) references public.category(id)
            );
            
            CREATE SEQUENCE public.product_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
            
            ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
            `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            drop table public.product;
        `);
    }
}
exports.createTableProduct1675766857443 = createTableProduct1675766857443;
//# sourceMappingURL=1693268618031-create-table-product.js.map