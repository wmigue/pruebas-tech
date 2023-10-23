//dado una funcion que reciba un numero entero, retornar ese numero pero con sus digitos invertidos. ejemplo: 1234===4321

import assert from "assert"
import { TestingFunction } from "./__tests.js"

function reverseNumber(n) {
  //n.toString().split("").sort((a, b)=> b-a)
  return parseInt(n.toString().split("").reverse().join(""))
}




const mockAsserts = [
  {
    it: "digitos invertidos.",
    test: function () {
      assert(reverseNumber(1234) === 4321, this.it)
    }
  },
  {
    it: "parametro tiene que ser tipo number.",
    test: function () {
      assert(typeof reverseNumber(1234) === "number", this.it)
    }
  }
]


TestingFunction(mockAsserts)