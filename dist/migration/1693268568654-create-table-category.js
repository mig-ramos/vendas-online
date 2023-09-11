"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableCategory1675766852242 = void 0;
class createTableCategory1675766852242 {
    async up(queryRunner) {
        queryRunner.query(`
            CREATE TABLE public.category (
                id integer NOT NULL,
                name character varying NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id)
            );
            
            CREATE SEQUENCE public.category_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
            
            ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            drop table public.category;
        `);
    }
}
exports.createTableCategory1675766852242 = createTableCategory1675766852242;
//# sourceMappingURL=1693268568654-create-table-category.js.map