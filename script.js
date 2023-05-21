// Solicitação API - Advice 


let btn = document.getElementById('btn-submit');
btn.addEventListener("click", function (){
    fetch('https://api.adviceslip.com/advice')
.then(resposta =>{
    return resposta.json();
}).then(corpo =>{
    //Acesso ao conteudo especifico da resposta
    const frase = corpo.slip.advice;
    //Exibição do conselho obtido
    document.getElementById('conselho-random').textContent = frase;
})
})

