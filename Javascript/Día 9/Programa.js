//Elabora un programa

/*Elaborar un programa que lea por teclado tres
números distintos y nos muestre el mayor de ellos*/

const num1 = parseInt(prompt('Ingresa el primer número'))
const num2 = parseInt(prompt('Ingresa el segundo número'))
const num3 = parseInt(prompt('Ingresa el tercer número'))

if(num1>num2 && num1>num3){
    document.write('El número más grande es: ' + num1)
    if(num2>num3){
        document.write('El número más grande es: ' + num2)
    }
}else{
    document.write('El número más grande es: ' + num3)
}