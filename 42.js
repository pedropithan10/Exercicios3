let numeros = []

let numero = Math.floor(Math.random() * 10)
    console.log("Número de elementos" + numero)
for(let i = 0; i <= numero; i++){
    let n = Math.floor(Math.random() * 25)
    
    numeros.push(n)
    
}

console.log(numeros.sort((a, b) => a - b))