"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTablePayment1676207680454 = void 0;
class createTablePayment1676207680454 {
    async up(queryRunner) {
        queryRunner.query(`
            CREATE TABLE public.payment (
                id integer NOT NULL,
                status_id int NOT NULL,
                price double precision NOT NULL,
                discount double precision NOT NULL,
                final_price double precision NOT NULL,
                "type" character varying NOT NULL,
                amount_payments int NOT NULL,
                code character varying NOT NULL,
                date_payment timestamp without time zone,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id),
                foreign key (status_id) references public.payment_status(id)
            );
            
            CREATE SEQUENCE public.payment_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.payment_id_seq OWNED BY public.payment.id;
            
            ALTER TABLE ONLY public.payment ALTER COLUMN id SET DEFAULT nextval('public.payment_id_seq'::regclass);
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            DROP TABLE public.payment
        `);
    }
}
exports.createTablePayment1676207680454 = createTablePayment1676207680454;
//# sourceMappingURL=1693789833705-create-table-payment.js.map