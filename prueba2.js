//definir una funcion para acceder a propiedades de un objeto. recibe por params el objeto, mensaje si no encuentra esa prop, 
//y el path, delimitando niveles con puntos, ej(names.others.apodo1)


import assert from "assert"
import { TestingFunction, areArraysEqual } from "./__tests.js";

function getProps(objeto, mensaje, path) {
  if (objeto && typeof objeto === 'object' && path !== undefined) {
    let result = eval('objeto' + '.' + path)
    return result
  } else {
    return mensaje
  }
}

const obj = {
  names: {
    email: 'wmigue@gmail.com',
    name: 'miguel',
    others: {
      apodo1: 'eugim',
      apodo2: 'wilson',
    },
  },
}





const mockAsserts = [
  {
      it: "la prop names.email existe en el objeto.",
      test: function () {
         assert( getProps(obj, "no existe", "names.email") !== undefined, this.it )
      }
  },
  {
      it: "se paso un string en lugar de un objeto en el primer argumento.",
      test: function () {
        assert( getProps("obj", "no existe", "names.email") === "no existe", this.it )
      }
  }
]


TestingFunction(mockAsserts)






