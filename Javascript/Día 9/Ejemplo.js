//Elabora un ejemplo

/*Ejemplo: Se escribe una fecha (día, mes y año) y
se  muestra un mensaje si corresponde al primer
trimestre del año (enero, febrero o marzo)*/

const day = parseInt(prompt('Ingresa el día *1, 10...'))
const month = (prompt('Ingresa el mes *enero, febrero...')).toLowerCase()
const year = parseInt(prompt('Ingresa el año *2020, 2021...'))

if(month === 'enero' || month === 'febrero' || month === 'marzo'){
    document.write(month + ' pertenece al primer trimestre del año')
}else{
    document.write(month + ' no pertenece al primer trimestre del año')
}

