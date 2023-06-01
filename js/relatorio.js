'use strict'

import { criterioJSON } from './relatoriojson.js'

const criterios = criterioJSON.criterios;

export const criterioForEach = () => {
    criterios.forEach((criterio) => {

        const container_relatorio = document.getElementById('container-relatorio')

        const container_dados = document.createElement('div')
        container_dados.classList.add('dados')
        container_dados.classList.add('criteriosDados')
        container_dados.id = 'dados'

        const descricaoCriterio = document.createElement('i')
        descricaoCriterio.classList.add('descricaoCriterio')
        descricaoCriterio.textContent = criterio.descricao.slice(0, 22) + "...";


        const desejado = document.createElement('i')
        desejado.textContent = criterio.margem_erro

        const obtido = document.createElement('i')
        obtido.classList.add('fa-sharp')
        obtido.classList.add('fa-solid')
        obtido.classList.add('fa-xmark')

        const avaliacao = document.createElement('i')
        avaliacao.classList.add('fa-sharp')
        avaliacao.classList.add('fa-solid')
        avaliacao.classList.add('fa-xmark')

        const container = document.createElement('div')
        container.classList.add('containerInput')

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('my-checkbox');
        checkbox.disabled = true;

        const spanCheck = document.createElement('span')
        spanCheck.classList.add('checkmark')

        if(criterio.observacao_nota == 1){
            checkbox.checked = true;
        }

        container_relatorio.append(container_dados)
        container_dados.append(descricaoCriterio, desejado, obtido, avaliacao, container)
        container.append(checkbox,spanCheck)


    });
}

