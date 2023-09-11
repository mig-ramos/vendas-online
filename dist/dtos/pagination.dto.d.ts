export declare class PaginationMeta {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
    constructor(itemsPerPage: number, totalItems: number, currentPage: number, totalPages: number);
}
export declare class Pagination<T> {
    meta: PaginationMeta;
    data: T;
    constructor(pagationMega: PaginationMeta, data: T);
}
