'use strict'

export const pesquisarHorario = async () => {
    const url = `https://usinagem-senai.cyclic.app/v1/projeto-usinagem/registro-tempo`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.registro_tempos);
    return data.registro_tempos;
}
