//los divisores de 42 son: 1,2,3,5,7,14,21,42
//los cuadrados respectivos de estos divisores son: 1, 4, 9 etc etc
//la suma de los cuadrados es: 2500
//que se puede expresar como 50*50(un cuadrado)

//se pide implementar una funcion que reciba dos paramatros: n y m, siendo m>=n>=1 y halle todos los numeros entre m y n que cuya suma de sus divisores al cuadrado formen un cuadrado.

//la funcion debe devolver un array con todos los numeros en ese rango formados por pares de valores.
//cada par de valores compondrade: numero que cumple la condicion en primer lugar, y la suma de los divisores al cuadrado en la segunda.


//los divisores de 42 son: 1,2,3,6,7,14,21,42
//los cuadrados respectivos de estos divisores son: 1, 4, 9 etc etc
//la suma de los cuadrados anteriores es: 2500
//que se puede expresar como 50*50(un cuadrado)

//se pide implementar una funcion que reciba dos paramatros: n y m, siendo m>=n>=1 y halle todos los numeros entre m y n que cuya suma de sus divisores al cuadrado formen un cuadrado.

//la funcion debe devolver un array con todos los numeros en ese rango formados por pares de valores.
//cada par de valores compondra de: numero que cumple la condicion en primer lugar, y la suma de los divisores al cuadrado en la segunda.

import assert from "assert"
import { TestingFunction, areArraysEqual } from "./__tests.js";


let divisores = [];
let cuadradosDivisores = [];
let sumaCuadrados = 0;
const cuadradosArr = [];

function calcularCuadradosArr(n, m) {
    if (n && m) {
        for (let f = n; f <= m; f++) {
            for (let i = 1; i <= f; i++) {
                f % i === 0
                    ? (
                        divisores.push(i),
                        cuadradosDivisores.push(i * i),
                        sumaCuadrados += (i * i)
                    ) : null;
            }
            if (Math.sqrt(sumaCuadrados) % 2 === 0 || sumaCuadrados === 1) {
                let cuenta = 0;
                cuenta = sumaCuadrados;
                cuadradosArr.push([f, cuenta]);
            }
            divisores = [];
            cuadradosDivisores = [];
            sumaCuadrados = 0;
        }
        return cuadradosArr;
    } else {
        return "Debe ingresar dos parametros"
    }

}




const mockAsserts = [
    {
        it: "return equal to expected.",
        test: function () {
            assert(areArraysEqual(calcularCuadradosArr(1, 42), [[1, 1], [42, 2500]]), "return equal to expected.")
        }
    },
    {
        it: "ingreso de parametros vacios.",
        test: function () {
            assert(calcularCuadradosArr("", "") === "Debe ingresar dos parametros", this.it)
        }
    }
]

TestingFunction(mockAsserts);
