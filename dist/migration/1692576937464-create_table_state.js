"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableState1675388988978 = void 0;
class createTableState1675388988978 {
    async up(queryRunner) {
        queryRunner.query(`
            CREATE TABLE public.state (
                id integer NOT NULL,
                name character varying NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id)
            );
            CREATE SEQUENCE public.state_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.state_id_seq OWNED BY public.state.id;
            ALTER TABLE ONLY public.state ALTER COLUMN id SET DEFAULT nextval('public.state_id_seq'::regclass);
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            drop table public.state;
        `);
    }
}
exports.createTableState1675388988978 = createTableState1675388988978;
//# sourceMappingURL=1692576937464-create_table_state.js.map