//Función Fecha

/*Realizamos  una función que reciba una fecha con el formato de día, 
mes y año y retorne un string con un formato similar a: 
"Hoy es 4 de Julio del 2022".*/

function date (day, month, year){
    let dateBefore = `Hoy es ${day} de `
    switch(month){
        case 1:
            dateBefore = dateBefore + 'Enero';
            break;
        case 2:
            dateBefore = dateBefore + 'Febrero';
            break;
        case 3:
            dateBefore = dateBefore + 'Marzo';
            break;
        case 4:
            dateBefore = dateBefore + 'Abril';
            break;
        case 5:
            dateBefore = dateBefore + 'Mayo';
            break;
        case 6:
            dateBefore = dateBefore + 'Junio';
            break;
        case 7:
            dateBefore = dateBefore + 'Julio';
            break;
        case 8:
            dateBefore = dateBefore + 'Agosto';
            break;
        case 9:
            dateBefore = dateBefore + 'Septiembre';
            break;
        case 10:
            dateBefore = dateBefore + 'Octubre';
            break;
        case 11:
            dateBefore = dateBefore + 'Noviembre';
            break;
        case 12:
            dateBefore = dateBefore + 'Diciembre';
            break;
        default:
            break
    }
    return (dateBefore + ` del ${year}`)
}

console.log (date (10, 6, 1990))


