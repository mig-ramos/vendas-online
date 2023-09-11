"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnCep = void 0;
class ReturnCep {
    constructor(returnCep, cityId, stateId) {
        this.cep = returnCep.cep;
        this.publicPlace = returnCep.logradouro;
        this.complement = returnCep.complemento;
        this.neighborhood = returnCep.bairro;
        this.city = returnCep.localidade;
        this.uf = returnCep.uf;
        this.ddd = returnCep.ddd;
        this.cityId = cityId;
        this.stateId = stateId;
    }
}
exports.ReturnCep = ReturnCep;
//# sourceMappingURL=return-cep.dto.js.map