"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crateTableCartProduct1675855589039 = void 0;
class crateTableCartProduct1675855589039 {
    async up(queryRunner) {
        queryRunner.query(`
            CREATE TABLE public.cart_product (
                id integer NOT NULL,
                cart_id integer NOT NULL,
                product_id integer NOT NULL,
                amount integer NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id),
                foreign key (cart_id) references public.cart(id),
                foreign key (product_id) references public.product(id)
            );
            
            CREATE SEQUENCE public.cart_product_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.cart_product_id_seq OWNED BY public.cart_product.id;
            
            ALTER TABLE ONLY public.cart_product ALTER COLUMN id SET DEFAULT nextval('public.cart_product_id_seq'::regclass);
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            drop table public.cart_product;
        `);
    }
}
exports.crateTableCartProduct1675855589039 = crateTableCartProduct1675855589039;
//# sourceMappingURL=1693593901903-create-table-cart-product.js.map