"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableStatus1676207674922 = void 0;
class createTableStatus1676207674922 {
    async up(queryRunner) {
        queryRunner.query(`
            CREATE TABLE public.payment_status (
                id integer NOT NULL,
                name character varying NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id)
            );
            
            CREATE SEQUENCE public.payment_status_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.payment_status_id_seq OWNED BY public.payment_status.id;
            
            ALTER TABLE ONLY public.payment_status ALTER COLUMN id SET DEFAULT nextval('public.payment_status_id_seq'::regclass);
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            DROP TABLE public.payment_status;
        `);
    }
}
exports.createTableStatus1676207674922 = createTableStatus1676207674922;
//# sourceMappingURL=1693789748297-create-table-status.js.map