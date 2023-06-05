'use strict'

import { pesquisarTarefas } from './apiTarefas.js';
import "./router.js"

export const criarDadosTarefa = async ()  => {
    const tarefasDados = await pesquisarTarefas();

    const containerTarefa = document.querySelector('.cards_turma')

    tarefasDados.forEach((tarefa) => {

        const aLinkCard = document.createElement('a')
        aLinkCard.classList.add('card')
        aLinkCard.href = '/horario'
        aLinkCard.id = 'aLinkCard'

        aLinkCard.addEventListener('click', () => {
           window.localStorage.setItem('teste', aLinkCard.href)
           route()
        })

        const card = document.createElement('div')
        card.classList.add('card')

        const imgPeca = document.createElement('img')
        imgPeca.src = tarefa.foto_peca

        const nomeTarefa = document.createElement('p')
        nomeTarefa.textContent = tarefa.nome

        aLinkCard.append(imgPeca,nomeTarefa)
       
        containerTarefa.append(aLinkCard)
        
    })
 
}

