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

        const desejadoContainer = document.createElement('div')
        desejadoContainer.classList.add('desejadoContainer')

        const desejado = document.createElement('i')
        desejado.textContent = criterio.resultado_desejado

        const margemErroContainer = document.createElement('div')
        margemErroContainer.classList.add('margemErroContainer')
        const margemMinimo = document.createElement('span')
        const margemMaximo = document.createElement('span')

        criterio.margem_erro.forEach((margem) => {
            if (margem.minimo != null)
                margemMinimo.textContent = '-' + margem.minimo;
            if (margem.maximo != null)
                margemMaximo.textContent = '+' + margem.maximo;
        })

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

        if (criterio.observacao_nota == 1) {
            checkbox.checked = true;
        }

        const divButtonEdit = document.createElement('div')
        divButtonEdit.classList.add('adicionar_editar_deletar')
        divButtonEdit.classList.add('criterio-button')

        const buttonEdit = document.createElement('button')
        buttonEdit.classList.add('far')
        buttonEdit.classList.add('fa-edit')

        const modalEditar = document.createElement('div')
        modalEditar.classList.add('d-none')
        modalEditar.classList.add('modal')

        const modalEditarContent = document.createElement('div')
        modalEditar.classList.add('modalContent')

        const btnBack = document.createElement('button')
        btnBack.classList.add('buttonBack')
    
        const iconeBack = document.createElement('i')
        iconeBack.classList.add('fa-solid')
        iconeBack.classList.add('fa-right-from-bracket')

        const editH2 = document.createElement('h2')
        editH2.textContent = 'Área de edição'
        editH2.classList.add('editH2')

        const contentEditRelatorio = document.createElement('div')
        contentEditRelatorio.classList.add('contentEditRelatorio')

        const contentShowDesc = document.createElement('div')
        contentShowDesc.classList.add('contentShowDesc')

        const showH3 = document.createElement('h3')
        showH3.classList.add('showH3')
        showH3.textContent = 'Descrição do critério:'

        const textDesc = document.createElement('textarea')
        textDesc.classList.add('textDesc')
        textDesc.textContent = criterio.descricao
        textDesc.disabled = true

        const showDesejadoContainer = document.createElement('div')
        showDesejadoContainer.classList.add('showDesejadoContainer')

        const spanDesejado = document.createElement('h3')
        spanDesejado.classList.add('showH3')
        spanDesejado.textContent = 'Desejado: '

    

        const avaliacaoObtidoContainer = document.createElement('div')
        avaliacaoObtidoContainer.classList.add('avaliacaoObtidoContainer')

        
        const spanObtido = document.createElement('h3')
        spanObtido.classList.add('showH3')
        spanObtido.textContent = 'Obtido: '

        const inputObtido = document.createElement('input')
        inputObtido.type = 'number'

        const avaliacaoContainer = document.createElement('div')
        avaliacaoContainer.classList.add('avaliacaoContainer')

        const formAvaliacao = document.createElement('form')
        formAvaliacao.method = 'post'

        const spanAvaliacao = document.createElement('h3')
        spanAvaliacao.classList.add('showH3')
        spanAvaliacao.textContent = 'Avaliação: '

        const opçoes = document.createElement('select')
        opçoes.name = 'S/N'

        const simOption = document.createElement('option')
        simOption.value = 'sim'
        simOption.textContent = 'sim'

        const naoOption = document.createElement('option')
        naoOption.value = 'nao'
        naoOption.textContent = 'não'

        const obtidoContainer = document.createElement('div')
        obtidoContainer.classList.add('obtidoContainer')

        container_relatorio.append(container_dados)
        container_dados.append(descricaoCriterio, desejadoContainer, obtido, avaliacao, container, divButtonEdit, modalEditar)
        modalEditar.append(modalEditarContent)
        modalEditarContent.append(btnBack, editH2, contentEditRelatorio)
        contentEditRelatorio.append(contentShowDesc)
        contentShowDesc.append(showH3,textDesc, showDesejadoContainer, avaliacaoObtidoContainer)
        avaliacaoObtidoContainer.append(avaliacaoContainer,obtidoContainer)
        avaliacaoContainer.append(spanAvaliacao,formAvaliacao)
        obtidoContainer.append(spanObtido,inputObtido)
        formAvaliacao.append(opçoes)
        opçoes.append(simOption,naoOption)
        showDesejadoContainer.append(spanDesejado,desejadoContainer)
        btnBack.append(iconeBack)
        desejadoContainer.append(desejado, margemErroContainer)
        margemErroContainer.append(margemMinimo, margemMaximo)
        container.append(checkbox, spanCheck)
        divButtonEdit.append(buttonEdit)

        buttonEdit.addEventListener('click', (event) => {
            event.preventDefault();
            modalEditar.classList.add('d-flex')
            modalEditar.classList.remove('d-none')
        })

        btnBack.addEventListener('click', (event) => {
            event.preventDefault();
            modalEditar.classList.remove('d-flex')
            modalEditar.classList.add('d-none')
        })



    });
}

