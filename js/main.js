function convertUserName(username){
    console.log(username);
    tamanho = username.length;
    if(tamanho > 13){
        var arrayName = username.split(' '); // separar cada palavra utilizando a funcao split
        var palavras = ['da','do','dos','de','das']; // verifica palavras se existem no nome para nao reduzir 
        var nameReduce = arrayName[0]; //Adiciona o primeiro nome na variavel
        arrayName.shift(); //remove a primeira posicao utilizando a funcao shift
        // utiliza a funcao map para percorrer os elementos do array
        arrayName.map(function(element) 
        {
            //verifica se as palavras reservadas esta contido no nome, e tambem se o nome é menor que 3 caracteres
            // diminui o elemento para nao dar conflito ao procurar as palavra reservadas (da,do,das,dos,de)
            if(palavras.includes(element.toLowerCase()) || element.length <= 3){
                //verifica o comprimento da variavel final
                if(nameReduce.length < 13){
                    //realiza a concatenacao dos dados
                    nameReduce += ' '+element;
                }
            }else{
                //verifica o comprimento da variavel final
                if(nameReduce.length < 13){
                    //realiza a concatenacao dos dados com a primeira letra pela funcao charAt
                    nameReduce += ' '+element.charAt(0)+'.';
                }
            }
        
        });
        return nameReduce;

    }else{
        return username;
    }    
}


document.getElementById("enviar").onclick = function(e) {
    var campo = document.querySelector("#nome").value;
    console.log(campo)
    var nome = convertUserName(campo)
    var element = document.getElementById('saida');
    element.innerHTML = '<div><b> Saida: '+nome+'</b></div>'
}
