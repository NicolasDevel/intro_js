//console.log('Se ha importado el archivo js')

//Esto es para agregar comentarios

/*
Variables
*/

let year = 2025 // Variable que puede cambiar con el tiempo
year = 2026
year = 2027

const pi = 3.141516 //Variables constante

// Cadenas de texto o Strings 
let gretting_v = 'Hola, mundo!'
let userName = "Nicolas"
console.log(gretting)
console.log("Mi nombre es: "+userName)
console.log("Mi nombre es: "+20)
console.log("Mi nombre es: "+true)

console.log("EL tamaño del texto es de: "+userName.length)
userName.split('') //['N', 'i', 'c', 'o', 'l', 'a', 's']

//numbers
let entero = 42
let decimal = 3.141516
let negative = -10
console.log(entero + decimal) //Suma
console.log(entero - decimal) //Resta
console.log(entero * decimal) //Multiplicación
console.log(entero / decimal) //División
console.log(entero % decimal) //Modulo

//Booleanos
let esMayor = true
let esIgual = 10 == 20

//Undefined
let sinValor
console.log(sinValor)

//Null
let vacio = null
console.log(vacio)

//Object
let person = {
    name : 'Nicolas',
    edad : 28,
    isStudent : false 
}

console.log(person)
console.log("Mi nombre es: "+person.name)
console.log("Mi edad es: "+ person['edad'])

let car = {
    marca : 'Toyota',
    modelo : 'Corolla',
    anio : 2025,
    color : 'Rojo',
    motor : {
        tipo : 'Gasolina',
        cilindros : 4,
        potencia: '130cv'
    }
}

//Condicionales
if (10 == 20) {
    console.log("10 es igual a 20")
} else if (10 > 20) {
    console.log("10 es mayor a 20")
} else {
    console.log("10 no es igual a 20")
}

console.log( 10 == 20 || 'edad' == 'edad' ) //operador or
console.log( 10 == 20 && 'edad' == 'edad') //Operador and

console.log(10 == 10) //True
console.log(10 == '10') // true
console.log(10 === '10') // false

console.log(10 != 20) //true
console.log(10 !== '10') //false


//Ciclo for
for(let i = 0; i <= 1000; i++) {
    console.log(i)
}

for(let i = 0; i <= 1000; i+=2) {
    console.log(i)
}

//Función tradicional
function gretting(name) {
    return `Hola, ${name}`
}

console.log(gretting('Nicolas'))

//Función anónima
const multiplicar = function(a,b) {
    return a * b
}

console.log(multiplicar(5,10))

//arrow functions
const suma = (a,b) => a + b
console.log(suma(10,20))

const sumarYMultiplicar = (a,b) => {
    const suma = a + b
    return suma * 10
}
console.log(sumarYMultiplicar(3,5))

function saludar(nombre = 'invitado'){
    return `Hola, ${nombre}`
}

console.log(saludar())

console.log(saludar('Nicolas'))

function sumarTodos(...numeros) {
    console.log(numeros)
}

sumarTodos(1,2,3,4,5,6,7,8,9)

//Array - Listas
numeros = [1,2,3,4,56,7,8,9]
console.log(numeros[1])
console.log(numeros.length)

let fruta = ['Manzana', 'Naranja']
fruta.push('Fresa') //Agregar al final de la lista
console.log(fruta)

let variable = fruta.pop() // Eliminar el último elemento
console.log(fruta)
console.log(variable)

fruta.shift() //Elimina el primer elemento
console.log(fruta)

fruta.unshift('Kiwi')
console.log(fruta) //Agrega al inicio

fruta = ['Manzana', 'Naranja']
console.log(fruta.indexOf('Manzana'))
console.log(fruta.indexOf('Manzanas'))

console.log(fruta.includes('Banana'))
console.log(fruta.includes('Manzana'))

