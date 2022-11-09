//Realiza un programa *Ciclos While*

/*Desarrollar un programa que permita la carga de 5 valores
por teclado y nos muestre posteriormente la suma.*/

let contador = 1
let suma = 0

while(contador<=5){
    let valor = parseInt(prompt(contador + ': Ingresa el valor'))
    suma = suma + valor
    contador ++
}
document.write('La suma de los 5 números es: ' + suma)