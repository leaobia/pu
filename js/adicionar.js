'use strict'
import { pesquisarHorario } from './apiHorario.js';





const fetchAPI = async () => {
    const horarios = await pesquisarHorario();
    const registroTempos = horarios;
    console.log(registroTempos.length);
    registroTempos.forEach((tempo) => {
        console.log(tempo.data_projeto);

        const container_horario = document.getElementById('teste')

        const container_dados = document.createElement('div')
        container_dados.classList.add('dados')
        container_dados.id = 'dados'

        const data = document.createElement('div')
        data.classList.add('data')

        const valorData = document.createElement('i')
        valorData.textContent = tempo.data_projeto.substring(8, 10) + '/' + tempo.data_projeto.substring(5, 7);

        const date_input = document.createElement('input')
        date_input.type = 'date'
        date_input.classList.add('date_input')


        const label_calendar = document.createElement('label')
        label_calendar.classList.add('fas')
        label_calendar.classList.add('fa-calendar-alt')
        label_calendar.for = date_input

        const inicio = document.createElement('div')
        inicio.classList.add('inicio')

        const valorInicio = document.createElement('i')
        valorInicio.textContent = tempo.duracao_inicio.substring(11, 16);

        const time_input_inicio = document.createElement('input')
        time_input_inicio.type = 'time'
        time_input_inicio.classList.add('time_input_inicio')

        const label_time_inicio = document.createElement('label')
        label_time_inicio.classList.add('fas')
        label_time_inicio.classList.add('fa-clock')
        label_time_inicio.classList.add('label_time')
        label_time_inicio.for = time_input_inicio

        const termino = document.createElement('div')
        termino.classList.add('termino')

        const valorTermino = document.createElement('i')
        valorTermino.textContent = tempo.duracao_termino.substring(11, 16);

        const time_input_termino = document.createElement('input')
        time_input_termino.type = 'time'
        time_input_termino.classList.add('time_input_inicio')

        const label_time_termino = document.createElement('label')
        label_time_termino.classList.add('fas')
        label_time_termino.classList.add('fa-clock')
        label_time_termino.classList.add('label_time')
        label_time_termino.for = time_input_termino
  
        const desconto = document.createElement('div')
        desconto.classList.add('termino')

        const valorDesconto = document.createElement('i')
        valorDesconto.textContent = tempo.duracao_termino.substring(11, 16);

        const time_input_desconto = document.createElement('input')
        time_input_desconto.type = 'time'
        time_input_desconto.classList.add('time_input_inicio')

        const label_time_desconto = document.createElement('label')
        label_time_desconto.classList.add('fas')
        label_time_desconto.classList.add('fa-clock')
        label_time_desconto.classList.add('label_time')
        label_time_desconto.for = time_input_desconto
  

        container_horario.append(container_dados)
        container_dados.append(data, inicio,termino, desconto)

        data.append(label_calendar, date_input, valorData)
        inicio.append(label_time_inicio, time_input_inicio, valorInicio)
        termino.append(label_time_termino,time_input_termino, valorTermino)
        desconto.append(label_time_desconto,time_input_desconto,valorDesconto)

    })
}



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
    dados_botoes.classList.add('d-none')

    const button_editar = document.createElement('button')
    button_editar.classList.add('far')
    button_editar.classList.add('fa-edit')
    button_editar.id = 'editar'

    const button_excluir = document.createElement('button')
    button_excluir.classList.add('fa-solid')
    button_excluir.classList.add('fa-trash')
    button_excluir.id = 'excluir'


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

    const btnSave2 = document.createElement('button')
    btnSave2.classList.add('botaoEditarSave')
    btnSave2.classList.add('d-none')

    const textSave = document.createElement('i')
    textSave.textContent = 'Save'


    const editH2 = document.createElement('h2')
    editH2.textContent = 'Área de edição'
    editH2.classList.add('editH2')

    const formEditar = document.createElement('form')
    formEditar.classList.add('d-flex-column-edit')

    const dataDivEdit = document.createElement('div')
    dataDivEdit.classList.add('divEdit')
    const time_inicioDivEdit = document.createElement('div')
    time_inicioDivEdit.classList.add('divEdit')
    const time_terminoDivEdit = document.createElement('div')
    time_terminoDivEdit.classList.add('divEdit')
    const time_descontoDivEdit = document.createElement('div')
    time_descontoDivEdit.classList.add('divEdit')

    const iDivDate = document.createElement('i')
    iDivDate.textContent = 'Data:'
    const iDivTimeInicio = document.createElement('i')
    iDivTimeInicio.textContent = 'Ínicio:'
    const iDivTimeTermino = document.createElement('i')
    iDivTimeTermino.textContent = 'Término'
    const iDivTimeDesconto = document.createElement('i')
    iDivTimeDesconto.textContent = 'Desconto:'

    const date_input_edit = document.createElement('input')
    date_input_edit.type = 'date'
    date_input_edit.required = true

    const time_input_inicio_edit = document.createElement('input')
    time_input_inicio_edit.type = 'time'
    time_input_inicio_edit.required = true

    const time_input_termino_edit = document.createElement('input')
    time_input_termino_edit.type = 'time'
    time_input_termino_edit.required = true

    const time_input_desconto_edit = document.createElement('input')
    time_input_desconto_edit.type = 'time'
    time_input_desconto_edit.required = true



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
        date_input_edit.value = myInputCalendarValue
        const myInputCalendarValueBR = date_input.value.substring(8, 10) + '/' + date_input.value.substring(5, 7);
        valorData.textContent = myInputCalendarValueBR
        //console.log(myInputCalendarValue);
        // console.log(myInputCalendarValueBR);
    });

    time_input_termino.addEventListener('change', () => {
        const myInputValue = time_input_termino.value;
        time_input_termino_edit.value = myInputValue;
        valorTermino.textContent = myInputValue.substring(0, 2) + 'h' + myInputValue.substring(3, 5)
    })



    time_input_inicio.addEventListener('change', () => {
        const myInputValue = time_input_inicio.value;
        time_input_inicio_edit.value = myInputValue
        valorInicio.textContent = myInputValue.substring(0, 2) + 'h' + myInputValue.substring(3, 5)
        //console.log(myInputValue.substring(0, 2) + 'h' + myInputValue.substring(3, 5));
    })


    time_input_desconto.addEventListener('change', () => {
        const myInputValue = time_input_desconto.value;
        time_input_desconto_edit.value = myInputValue
        const formatoBack = myInputValue + ':00'

        valorDesconto.textContent = myInputValue.substring(0, 2) + 'h' + myInputValue.substring(3, 5)
    })

    const inputsEdit = [date_input_edit, time_input_termino_edit, time_input_inicio_edit, time_input_desconto_edit];
    const inputsVerdadeiros = [date_input, time_input_termino, time_input_inicio, time_input_desconto]

    inputsEdit.forEach((input, index) => {
        input.addEventListener('change', () => {

            btnSave2.classList.remove('d-none');
            btnSave2.classList.add('d-flex');

            btnSave2.addEventListener('click', (event) => {
                event.preventDefault();

                const newValue = input.value;
                inputsVerdadeiros[index].value = newValue;
                const changeEvent = new Event('change');
                inputsVerdadeiros[index].dispatchEvent(changeEvent);

                const btc_save = document.getElementById('salvar')

                btc_save.click()

                modalEditar.classList.remove('d-flex')
                modalEditar.classList.add('d-none')
            })
        });
    });






    // colocando no pai

    container_horario.append(container_dados)
    container_dados.append(data, inicio, termino, desconto, liquido, total_geral, dados_botoes, modalEditar)
    modalEditar.append(modalEditarContent)
    modalEditarContent.append(btnBack, editH2, formEditar, btnSave2,)
    btnBack.append(iconeBack)
    btnSave2.append(textSave)

    data.append(label_calendar, date_input, valorData)
    inicio.append(label_time_inicio, time_input_inicio, valorInicio)
    termino.append(label_time_termino, time_input_termino, valorTermino)
    desconto.append(label_time_desconto, time_input_desconto, valorDesconto)
    liquido.append(valor_liquido)
    total_geral.append(valor_total)
    dados_botoes.append(button_excluir, button_editar)

    formEditar.append(dataDivEdit, time_inicioDivEdit, time_terminoDivEdit, time_descontoDivEdit)
    dataDivEdit.append(iDivDate, date_input_edit)
    time_inicioDivEdit.append(iDivTimeInicio, time_input_inicio_edit)
    time_terminoDivEdit.append(iDivTimeTermino, time_input_termino_edit)
    time_descontoDivEdit.append(iDivTimeDesconto, time_input_desconto_edit)


    const btc_save = document.getElementById('salvar')

    const inputs = document.querySelectorAll('.check_input');

    inputs.forEach((input) => {
        input.addEventListener('input', () => {

            if (container_horario.checkValidity()) {
                btc_save.classList.add('d-flex');
                btc_save.classList.remove('d-none');
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

            let somaHoursLiquid = somaHours - hour3;
            let somaMinutesLiquid = somaMinutes - minute3;

            if (somaMinutes >= 60) {
                somaHours++;
                somaMinutes -= 60;
            }

            if (somaMinutesLiquid < 0) {
                somaHoursLiquid--;
                somaMinutesLiquid += 60;
            }

            if (somaHoursLiquid < 0) {
                somaHoursLiquid += 24;
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

        container_dados.addEventListener('mouseenter', () => {
            dados_botoes.classList.add('d-flex');
            dados_botoes.classList.remove('d-none');
        });

        container_dados.addEventListener('mouseleave', () => {
            dados_botoes.classList.remove('d-flex');
            dados_botoes.classList.add('d-none');
        });


        const botao_adc = document.getElementById('adicionar')
        botao_adc.classList.add('d-flex')
        botao_adc.classList.remove('d-none')

        time_input_termino.disabled = true;
        time_input_inicio.disabled = true;
        time_input_desconto.disabled = true;
        date_input.disabled = true;

        button_editar.addEventListener('click', (event) => {
            event.preventDefault();
            //alert('editar' + time_input_desconto.value)
            modalEditar.classList.add('d-flex')
            modalEditar.classList.remove('d-none')
        })


        button_excluir.addEventListener('click', (event) => {
            event.preventDefault();
            container_dados.classList.add('d-none')
        }
        )

        btnBack.addEventListener('click', (event) => {
            event.preventDefault();
            //alert('editar' + time_input_desconto.value)
            modalEditar.classList.remove('d-flex')
            modalEditar.classList.add('d-none')
        })


    })






}

export const eventoBotãoAdicionar = () => {

    fetchAPI()

    const botao_adc = document.getElementById('adicionar')

    // pesquisarHorario()


    botao_adc.addEventListener('click', () => {
        const btc_save = document.getElementById('salvar')
        btc_save.classList.add('d-none')
        btc_save.classList.remove('d-flex')

        botao_adc.classList.add('d-none')
        botao_adc.classList.remove('d-flex')

        criarDadosHorario()
    })
}