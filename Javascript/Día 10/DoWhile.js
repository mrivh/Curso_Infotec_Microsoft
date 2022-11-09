//Realizar un programa *Ciclo Do While*

/*Realizar un programa que acumule (sume) valores ingresados
por teclado hasta ingresar el 9999 (no sumar dicho valor,
solamente hay que indicar que ha finalizado la carga). 

Imprimir el valor acumulado e informar si dicho valor es
cero, mayor a cero o menor a cero.*/

let valor
let stop = 9999
let suma = 0
do{
    valor = parseInt(prompt('Ingresar el valor a sumar (el número 9999 es para parar la operación)'))
    
    if(valor !== stop){
        suma = suma + valor
    }
        
}while(valor !== stop)

document.write('La suma de los números es: ' + suma + '<br>')
    if (suma > 0){
        document.write(suma + ' es mayor que cero')
        if(suma < 0){
            document.write(suma + ' es menor que cero') 
        }
    }else{
        document.write(suma + ' es igual a cero')
    }