'use strict'

import { criterioJSON } from './relatoriojson.js'

const criterios = criterioJSON.criterios;

export const criterioForEach = () => {
    criterios.forEach((criterio) => {

        console.log(criterio.descricao);
        console.log(criterio.observacao_nota);
        console.log(criterio.margem_erro);
    
    });
}

