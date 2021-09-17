const jogar = function(){
    const nRandom = Math.random() * 100
    let chute = 0

    do{
        chute = prompt('Qual número foi gerado?')
        if(chute > nRandom){
            alert('boa mlk')
        }
        else{
            alert('errouu')
        }

    }while(chute != nRandom)
}