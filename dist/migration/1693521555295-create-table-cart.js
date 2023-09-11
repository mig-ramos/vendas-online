"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableCart1675854227354 = void 0;
class createTableCart1675854227354 {
    async up(queryRunner) {
        queryRunner.query(`
            CREATE TABLE public.cart (
                id integer NOT NULL,
                user_id integer NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id),
                foreign key (user_id) references public.user(id)
            );
            
            CREATE SEQUENCE public.cart_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.cart_id_seq OWNED BY public.cart.id;
            
            ALTER TABLE ONLY public.cart ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            drop table public.cart;
        `);
    }
}
exports.createTableCart1675854227354 = createTableCart1675854227354;
//# sourceMappingURL=1693521555295-create-table-cart.js.map