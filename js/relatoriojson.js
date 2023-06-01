export const criterioJSON = {
  criterios: [
    {
      descricao: "Descricao de um criterio para ser avaliado",
      observacao_nota: 1,
      margem_erro: [
        {
          minimo: 0.3,
          maximo: 0.7
        }
      ],
      tipo_critico: 1,
      resultado_desejado: 140,
      id_tarefa: 1
    },
    {
      descricao: "Outra descricao de um criterio",
      observacao_nota: 0,
      margem_erro: [
        {
          minimo: 0.4,
          maximo: null
        }
      ],
      tipo_critico: 0,
      resultado_desejado: 130,
      id_tarefa: 2
    }
  ]
};




