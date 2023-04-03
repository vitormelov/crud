let meses = {
    '01': 'Janeiro',
    '02': 'Fevereiro',
    '03': 'Março',
    '04': 'Abril',
    '05': 'Maio',
    '06': 'Junho',
    '07': 'Julho',
    '08': 'Agosto',
    '09': 'Setembro',
    '10': 'Outubro',
    '11': 'Novembro',
    '12': 'Dezembro',
};

date = new Date

for (let d = 1; d <= 9; d++) {
    dia.innerHTML += `<option value="${"0"+d}">${"0"+d}</option>`
}

for (let d = 10; d <= 31; d++) {
    dia.innerHTML += `<option value="${d}">${d}</option>`
}

for (let i = 1; i <= 9; i++) {
    mes.innerHTML += `<option value="0${i}">${meses["0"+i]}</option>`;
}

for (let i = 10; i <= 12; i++) {
    mes.innerHTML += `<option value="${i}">${meses[i]}</option>`;
}

for (let a = date.getFullYear(); a >= date.getFullYear() - 100; a--) {
    ano.innerHTML += `<option value="${a}">${a}</option>`;
}