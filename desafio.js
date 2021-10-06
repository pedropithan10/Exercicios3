const alfabeto       = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const alfabetoCripto = ["z", "y", "x", "m", "e", "r", "g", "a", "w", "k", "b", "t", "i", "o", "c", "u", "s", "d", "v", "f", "h", "l", "j", "q", "n", "p"]


const criptografar = function(){
    let mensagem = document.getElementById('mensagem').value
    let msgcrip = ""
    let i = 0
    if(mensagem == ""){
        alert('informe algum valor')
    }else{

            for( let j = 0; i < mensagem.length; j++){
            

            alfabeto.forEach((Letra, i) => {
                if(mensagem[j] == Letra){
                    msgcrip += alfabetoCripto[i]
                    alert(msgcrip)
                }
            });
        }
    }
    document.getElementById('msgcripto').value = msgcrip
    alert(fodase)
}