let numeros = new Array()
for (let i = 0; i < 4; i++){
    let v1 = Math.floor(Math.random() * 10)
    let v2 = Math.floor(Math.random() * 10)
    let v3 = Math.floor(Math.random() * 10)
    let v4 = Math.floor(Math.random() * 10)
    numeros.push([v1, v2, v3, v4])
}
console.log(numeros)
let j = 0
while(j< numeros.length){
    numeros[j][0] = Math.pow(numeros[j][0], 2)
    numeros[j][1] = Math.pow(numeros[j][1], 2)
    numeros[j][2] = Math.pow(numeros[j][2], 2)
    numeros[j][3] = Math.pow(numeros[j][3], 2)
    j++
}
console.log(numeros)