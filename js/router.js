'use strict'

import {eventoBotãoAdicionar} from'./adicionar.js'
import {criterioForEach} from'./relatorio.js'

const routes = {
    '/materia' : {
                        html : '/pages/aluno/materia.html',
                        // js : carregarCardMateria
    },
    '/areaAluno'     : {
                        html : '/pages/aluno/areaAluno.html',
                        // js : carregarCardAreaAluno
    },
    '/horario'     : {
                        html : '/pages/aluno/horario.html',
                        // js : carregarCardHorario
    },
    '/relatorio'     : {
                        html : '/pages/aluno/relatorio.html',
                        // js : carregarCardRelatorio
    }
}

const route = async() => {

    window.event.preventDefault()

    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    console.log(window.location.pathname);

    const response = await fetch(routes[path].html)
    
    const html = await response.text()

    document.getElementById('root_aluno').innerHTML = html


    if(window.location.pathname == '/horario'){
        eventoBotãoAdicionar()
    }
    if(window.location.pathname == '/relatorio'){
        criterioForEach()
    }
}

window.route = route

//getValuesOfInputTimeDate(),