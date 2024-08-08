//alert('Hola desde un alert');
let nombre = "Frida";

//constante
const pi=3.14;

//Tipo de datos
//no definido
let noDefinido;

//Numero
let cantidad=50;

//cadena de texto o string
let bebida="agua";

//boolean
let activo=true;

//objetos
//persona: nombre, apellido, edad, peso
let persona={nombre:'Frida', apellido:'Vazquez', edad:19, peso:50};
console.log(persona);

let personas=[
    {nombre:'Eduardo', apellido:'Lopez', edad:19, peso:100},
    {nombre:'Raul', apellido:'Chavira', edad:19, peso:85},
    {nombre:'Gael', apellido:'Estrada', edad:19, peso:70},
    persona
]

console.log(personas);
console.log(personas[2]);

//Funciones

function suma(){
    return 2+2;
}

let resultado= suma();
console.log(resultado);