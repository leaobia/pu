'use strict'

const criarDadosHorario = () => {

    const container_horario = document.getElementById('teste')

    const container_dados = document.createElement('div')
    container_dados.classList.add('dados')
    container_dados.id = 'dados'

    const data = document.createElement('div')
    data.classList.add('data')

    const valorData = document.createElement('i')


    const date_input = document.createElement('input')
    date_input.type = 'date'
    date_input.classList.add('date_input')
    //date_input.id = 'date_input'
    date_input.classList.add('check_input')
    date_input.required = true


    const label_calendar = document.createElement('label')
    label_calendar.classList.add('fas')
    label_calendar.classList.add('fa-calendar-alt')
    label_calendar.for = date_input
    // label_calendar.id = 'label_calendar'



    const inicio = document.createElement('div')
    inicio.classList.add('inicio')

    const valorInicio = document.createElement('i')

    const time_input_inicio = document.createElement('input')
    time_input_inicio.type = 'time'
    time_input_inicio.classList.add('time_input_inicio')
    // time_input_inicio.id = 'time_input_inicio'
    time_input_inicio.classList.add('check_input')
    time_input_inicio.required = true

    const label_time_inicio = document.createElement('label')
    label_time_inicio.classList.add('fas')
    label_time_inicio.classList.add('fa-clock')
    label_time_inicio.classList.add('label_time')
    label_time_inicio.for = time_input_inicio
    // label_time_inicio.id = 'label_time_inicio'



    const termino = document.createElement('div')
    termino.classList.add('termino')

    const time_input_termino = document.createElement('input')
    time_input_termino.type = 'time'
    time_input_termino.classList.add('time_input_termino')
    time_input_termino.classList.add('check_input')
    time_input_termino.required = true
    //time_input_termino.id = 'time_input_termino'


    const valorTermino = document.createElement('i')



    const label_time_termino = document.createElement('label')
    label_time_termino.classList.add('fas')
    label_time_termino.classList.add('fa-clock')
    label_time_termino.classList.add('label_time')
    label_time_termino.for = time_input_termino
    //label_time_termino.id = 'label_time_termino'


    const desconto = document.createElement('div')
    desconto.classList.add('desconto')

    const valorDesconto = document.createElement('i')

    const time_input_desconto = document.createElement('input')
    time_input_desconto.type = 'time'
    time_input_desconto.classList.add('time_input_desconto')
    //time_input_desconto.id = 'time_input_desconto'
    time_input_desconto.classList.add('check_input')
    time_input_desconto.required = true

    const label_time_desconto = document.createElement('label')
    label_time_desconto.classList.add('fas')
    label_time_desconto.classList.add('fa-clock')
    label_time_desconto.classList.add('label_time')
    label_time_desconto.for = time_input_desconto
    //label_time_desconto.id = 'label_time_termino'




    const liquido = document.createElement('div')
    liquido.classList.add('liquido')

    const valor_liquido = document.createElement('i')
    valor_liquido.textContent = '00h00'

    const total_geral = document.createElement('div')
    total_geral.classList.add('total_geral')

    const valor_total = document.createElement('i')
    valor_total.textContent = '00h00'

    const dados_botoes = document.createElement('div')
    dados_botoes.classList.add('dados_botoes')

    const button_editar = document.createElement('button')
    button_editar.classList.add('far')
    button_editar.classList.add('fa-edit')
    button_editar.id = 'editar'

    const button_excluir = document.createElement('button')
    button_excluir.classList.add('far')
    button_excluir.classList.add('fa-trash')
    button_excluir.id = 'excluir'


    // click e change


    label_calendar.addEventListener('click', () => {
        date_input.showPicker();
    })


    label_time_desconto.addEventListener('click', () => {
        time_input_desconto.showPicker();
    })


    label_time_inicio.addEventListener('click', () => {
        time_input_inicio.showPicker();
    })

    label_time_termino.addEventListener('click', () => {
        time_input_termino.showPicker();
    })



    date_input.addEventListener('change', () => {
        const myInputCalendarValue = date_input.value;
        const myInputCalendarValueBR = date_input.value.substring(8, 10) + '/' + date_input.value.substring(5, 7);
        valorData.textContent = myInputCalendarValueBR
        //console.log(myInputCalendarValue);
        // console.log(myInputCalendarValueBR);
    });

    time_input_termino.addEventListener('change', () => {
        const myInputValue = time_input_termino.value;
        valorTermino.textContent = myInputValue.substring(0, 2) + 'h' + myInputValue.substring(3, 5)
    })



    time_input_inicio.addEventListener('change', () => {
        const myInputValue = time_input_inicio.value;
        valorInicio.textContent = myInputValue.substring(0, 2) + 'h' + myInputValue.substring(3, 5)
        //console.log(myInputValue.substring(0, 2) + 'h' + myInputValue.substring(3, 5));
    })


    time_input_desconto.addEventListener('change', () => {
        const myInputValue = time_input_desconto.value;

        const formatoBack = myInputValue + ':00'

        valorDesconto.textContent = myInputValue.substring(0, 2) + 'h' + myInputValue.substring(3, 5)
    })




    // colocando no pai

    container_horario.append(container_dados)
    container_dados.append(data, inicio, termino, desconto, liquido, total_geral, dados_botoes)
    data.append(label_calendar, date_input, valorData)
    inicio.append(label_time_inicio, time_input_inicio, valorInicio)
    termino.append(label_time_termino, time_input_termino, valorTermino)
    desconto.append(label_time_desconto, time_input_desconto, valorDesconto)
    liquido.append(valor_liquido)
    total_geral.append(valor_total)
    dados_botoes.append(button_excluir, button_editar)


    const btc_save = document.getElementById('salvar')

    const inputs = document.querySelectorAll('.check_input');

    inputs.forEach((input) => {
        input.addEventListener('input', () => {

            console.log(container_horario);
            if (container_horario.checkValidity()) {
                btc_save.classList.add('d-flex');
                btc_save.classList.remove('d-none');
            } else {
                console.log('Não foi possível salvar os dados, por conta de não ser preenchido todos os inputs');
            }

        });
    });







    btc_save.addEventListener('click', () => {

        if (time_input_termino.value == null, time_input_termino == "", time_input_inicio == null, time_input_inicio == " ", time_input_termino < time_input_inicio) {
            console.log('Não foi possivel calcular');
        } else {

            const hora1 = time_input_inicio.value;
            const hora2 = time_input_termino.value;
            const hora3 = time_input_desconto.value;

            const [hour1, minute1] = hora1.split(":").map(Number);
            const [hour2, minute2] = hora2.split(":").map(Number);
            const [hour3, minute3] = hora3.split(":").map(Number);

            let somaHours = (hour2 - hour1);
            let somaMinutes = (minute2 - minute1);

            let somaHoursLiquid = (hour2 - hour1 - hour3);
            let somaMinutesLiquid = (minute2 - minute1 - minute3);

            if (somaMinutes >= 60) {
                somaHours++;
                somaMinutes -= 60;
            }

            //console.log(`${somaHours}h${somaMinutes}`);

            const valorTotal = `${somaHours}h${somaMinutes}`
            const valorTotalLiquid = `${somaHoursLiquid}h${somaMinutesLiquid}`


            if (valorTotal == '0hNaN' || valorTotalLiquid == '0hNaN') {
                console.log('Não foi possível processar os valores.');

            } else {
                valor_total.textContent = valorTotal.replace('-', '0')

                valor_liquido.textContent = valorTotalLiquid.replace('-', '0')
            }

            const btc_save = document.getElementById('salvar')
            btc_save.classList.add('d-none')
            btc_save.classList.remove('d-flex')

        }

        const botao_adc = document.getElementById('adicionar')
        botao_adc.classList.add('d-flex')
        botao_adc.classList.remove('d-none')

        time_input_termino.disabled = true;
        time_input_inicio.disabled = true;
        time_input_desconto.disabled = true;
        date_input.disabled = true;

    })



    button_excluir.addEventListener('click', () => {
        container_dados.classList.add('d-none')
    }
    )
    button_editar.addEventListener('click', () => {
        alert('editar')
    })



}

export const eventoBotãoAdicionar = () => {

    const botao_adc = document.getElementById('adicionar')



    botao_adc.addEventListener('click', () => {
        const btc_save = document.getElementById('salvar')
        btc_save.classList.add('d-none')
        btc_save.classList.remove('d-flex')

        botao_adc.classList.add('d-none')
        botao_adc.classList.remove('d-flex')
        criarDadosHorario()
    })
}