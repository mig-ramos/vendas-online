"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = exports.PaginationMeta = void 0;
class PaginationMeta {
    constructor(itemsPerPage, totalItems, currentPage, totalPages) {
        this.itemsPerPage = itemsPerPage;
        this.totalItems = totalItems;
        this.currentPage = currentPage;
        this.totalPages = totalPages;
    }
}
exports.PaginationMeta = PaginationMeta;
class Pagination {
    constructor(pagationMega, data) {
        this.meta = pagationMega;
        this.data = data;
    }
}
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.dto.js.map