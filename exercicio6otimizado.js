let numeros = new Array()
for(let i = 0; i < 4; i++){
    let v1 = Math.floor(Math.random() * 10)
    let v2 = Math.floor(Math.random() * 10)
    let v3 = Math.floor(Math.random() * 10)
    let v4 = Math.floor(Math.random() * 10)
    numeros.push([v1, v2, v3, v4])
}
numeros.forEach(LinhaNumeros => {
    let v1 = Math.pow(LinhaNumeros[0], 2)
    let v2 = Math.pow(LinhaNumeros[1], 2)
    let v3 = Math.pow(LinhaNumeros[2], 2)
    let v4 = Math.pow(LinhaNumeros[3], 2)
    numerosdobrados.push([v1, v2, v3, v4])
});
console.log("Matriz atual")
numeros.forEach(LinhaNumeros => {console.log(LinhaNumeros)})
console.log("Matriz dobrada")
numerosdobrados.forEach(LinhaNumeros=>{console.log(LinhaNumeros)})