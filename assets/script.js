const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus")

function jump(){

    if(dispatchEvent.classList!="jump") 
    {/*verifica se existe uma classe jump,se não existir adicona
    a classe jump que cria o efeito de pulo */
       dino.classList.add("jump");

        setTimeout (function(){
            dino.classList.remove("jump"); 
        },300)
        /*depois remove a classe tudo com intervalo de 0,3 segundos */
    }
}

let checkAlive = setInterval(function(){/*executa a cada 10 milisegundos, o 10 esta
no final da função */
    
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    //windows.getComputedStyle(dino) pega o estilo css do objeto dino
    //getPropertyValue("top") extrair os valores da propriedade css "top""
    //do objeto
    //parseInt transforma os valores que estão em strings para numeros
    //no caso os valores estão em PX(pixel)

    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    // faz a mesma coisa que o codigo acima, mas agora estamos extraindo
    // os valores do objeto catus a esquerda.
    
    if(cactusLeft>0 && cactusLeft<70 && dinoTop>=143){
        dino.style.animationPlayState = 'paused';
        cactus.style.animationPlayState = 'paused';
        alert("Whoops! Game Over :(");
        window.location.reload();
    }//aqui ele verifica se ouve a colisão entre o 
   // dino e o cactus usando as posições como referencia
   //caso for positivo ele emite um alert e reinicia o jogo.
},10);

document.addEventListener("keydown", function(event){
    jump();
})// aqui para finalizar, sempre que  seta para baixo for
    //pressionada a função jump() será executada