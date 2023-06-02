'use strict'

export const pesquisarHorario = async () => {
    const url = `https://usinagem-senai.cyclic.app/v1/projeto-usinagem/registro-tempo`;
    const response = await fetch(url);
    const data = await response.json();
    return data.registro_tempos;
  }

  export const createHorario = async (horario) => {
    const url = `https://usinagem-senai.cyclic.app/v1/projeto-usinagem/registro-tempo`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(horario)
    };
  
    fetch(url, options)
  }
  

  export const deleteHorario = async (idHorario) => {
    const url = `https://usinagem-senai.cyclic.app/v1/projeto-usinagem/registro-tempo/${idHorario}`;
    const options = {
      method: 'DELETE'
    };
  
    fetch(url, options)
  }