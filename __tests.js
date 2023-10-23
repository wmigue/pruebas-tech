/** 
 * función de testing.
 *
 * @param {mockAsserts} fn - mocks={it, test}.
 * @returns {null}- solo console.log.
*/



export function TestingFunction(mockAssertsArr) {
    for (let x of mockAssertsArr) {
        try {
            x.test()
            console.log(" ✔ " + x.it )
        } catch (e) {
            console.log("❌" + e.message)
            console.log(" EXPECTED: " + e.expected)
            console.log(" ACTUAL: " + e.actual)
        }
    }
    return null
}








/** 
 * compara si ambos arrays son iguales y tienen los mismos elementos.
 *
 * @param {array} array1 
 * @param {array} array2  
 * @returns {boolean} 
 * 
*/
export function areArraysEqual(array1, array2) {
    array1.sort();
    array2.sort();

    // y se realiza la comparación de cada elemento
    array1.length == array2.length && array1.every(function (v, i) { return v === array2[i] });

    return true;
}

