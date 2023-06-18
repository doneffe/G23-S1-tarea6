//1. Mostrar en consola la secuencia de Fibonacci
//a. Entre 0 y 1000
//b. Pares entre 0 y 1000
//c. Impares entre 0 y 1000


//Se asume que Fib(1000) sería la secuencia de números de fibonacci hasta alcanzar el resultado 1000 o menor
//debido a que calcular la secuencia hasta la iteracion 1000 y desplegar esa secuencia consumiría muchos
//recursos
const funcionFib = "fib";
const funcionParFib = "parFib";
const funcionImparFib = "imparFib";

function fibonacci(n) {
    const res = [0, 1];

    for (let i = 2; i<= n ; i++) {
        if((res[i -1] + res[i - 2]) > n){ //Si el valor calculado es mayor a n
            i = n + 1; //salimos del for
        }else{
            res[i] = res[i -1] + res[i - 2];}
    }
    return res;
}

var argumentos = process.argv.slice(2);

if (argumentos.length < 2)
{
	console.log("Debe proporcionar el nombre de la función y su argumento");
	process.exit();
}

const fibArray = fibonacci(argumentos[1]);

if(argumentos[0] === funcionFib){
    //Elegi fib, debo desplegarlo
    console.log(fibArray);
}else if(argumentos[0] === funcionParFib){
    //Elegi Pares Fib, debo filtrar los pares y desplegarlos
    const parArray = fibArray.filter(num => num % 2 === 0);
    console.log(parArray);
}else if(argumentos[0] === funcionImparFib){
    //Elegi Impares Fib, debo filtrar los impares y desplegarlos
    const imparArray = fibArray.filter(num => num % 2 !== 0);
    console.log(imparArray);
}

