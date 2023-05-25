'use strict'

// import { carregarCardDescription } from "./description.js"
// import { carregarCardVarinha } from "./varinha.js"

const routes = {
    '/cursos' : {
                        html : '/pages/professor/cursos.html',
                        // js : carregarCardMateria
    },
    '/turmas'     : {
                        html : '/pages/professor/turmas.html',
                        // js : carregarCardAreaAluno
    },
    '/alunos'     : {
                        html : '/pages/professor/alunos.html',
                        // js : carregarCardHorario
    }
}

const route_professor = async() => {
    // não permite passar para outra página
    window.event.preventDefault()

    //passar pela url sem alterar a pagina
    window.history.pushState({}, "", window.event.target.href)

    //pegando o valor do href que é passado lá no index
    const path = window.location.pathname
    console.log(window.location.pathname);

    //pega a posição path que são alguma das paginas
    const response = await fetch(routes[path].html)
    
    const html = await response.text()

    document.getElementById('root_professor').innerHTML = html

    routes[path].js()
}

window.route_professor = route_professor
