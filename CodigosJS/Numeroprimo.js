<<<<<<< HEAD
function primo(){
    var numero =  parseInt(document.getElementById('num').value);
    var resposta = document.getElementById('resposta');
    var divisores = 0
    
    for(var primo=1; primo<=numero; primo ++)
    if(numero % primo == 0)
       divisores++
    
       if(divisores==2)
       resposta.innerHTML = "O número " +  numero +  " é primo!";
       
       else
       resposta.innerHTML = "O número " + numero + " não é primo!";
=======
function primo(){
    var numero =  parseInt(document.getElementById('num').value);
    var resposta = document.getElementById('resposta');
    var divisores = 0
    
    for(var primo=1; primo<=numero; primo ++)
    if(numero % primo == 0)
       divisores++
    
       if(divisores==2)
       resposta.innerHTML = "O número " +  numero +  " é primo!";
       
       else
       resposta.innerHTML = "O número " + numero + " não é primo!";
>>>>>>> d3c59aab014ba330831b3d10f54442d2d81a12e3
    }