const schedule = require('node-schedule')

// a cada 5 segundos, quando for 12 horas e o dia for sábado
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 6', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 20000)

// regra de recorrência
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 6)] // de segunda à sábado
regra.hour = 12 // quando a hora for 12
regra.second = 30 // sempre no segundo 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})