"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableOrder1676210150319 = void 0;
class createTableOrder1676210150319 {
    async up(queryRunner) {
        queryRunner.query(`
            CREATE TABLE public.order (
                id integer NOT NULL,
                user_id int NOT NULL,
                address_id int NOT NULL,
                "date" timestamp without time zone DEFAULT now() NOT NULL,
                payment_id int NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id),
                foreign key (user_id) references public.user(id),
                foreign key (address_id) references public.address(id),
                foreign key (payment_id) references public.payment(id)
            );
            
            CREATE SEQUENCE public.order_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.order_id_seq OWNED BY public.order.id;
            
            ALTER TABLE ONLY public.order ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            DROP TABLE public.order;
        `);
    }
}
exports.createTableOrder1676210150319 = createTableOrder1676210150319;
//# sourceMappingURL=1693793038479-create-table-order.js.map