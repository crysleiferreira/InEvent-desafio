function convertUserName(username){
    size = username.length;
    if(size > 13){
        let arrayName = username.split(' ');
        let nameReduce = arrayName[0];
        arrayName.shift();
        arrayName.map(function(element) 
        {
            if(element.length <= 3){
                if(nameReduce.length < 13){
                    nameReduce += ' '+element;
                }
            }else{
                if(nameReduce.length < 13){
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
    let username = document.querySelector("#nome").value;
    let name = convertUserName(username);
    let element = document.getElementById('saida');
    element.innerHTML = name;
}
