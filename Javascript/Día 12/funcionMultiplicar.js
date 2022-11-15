//Función Multiplicar

/*Creamos una función que solicite el ingreso de un entero y nos muestre 
la tabla de multiplicar de dicho valor. Luego llamar una vez a la función.*/ 

function multiplicar (num){
    let factor = 0;
    while (factor <= 10){
        let tabla = num * factor
        document.write (`${num} x ${factor} = ${tabla} <br>`)
        factor++
    }
}

let valor = parseInt(prompt('Ingrese un número'))
multiplicar(valor)
