async function buscarDetalhes(){
    let busca = await fetch("lista-produtos.json")
    let produtos = await busca.json()
    let parametros = new URLSearchParams(window.location.search)
    
    let parametroID = parametros.get("produto-id")
    
    let indiceProd
    
    for(let x in produtos){
         
        if(produtos[x].id == parametroID){
             
            indiceProd = x
        }

   }

   document.getElementById("conteiner").innerHTML += `
    <div class="dados">
        <h3>${produtos[indiceProd].nome}</h3>
        <img src="${produtos[indiceProd].img[0]}" id="frame" width="250" height="250">
       
        <p class="descrit">${produtos[indiceProd].descricao}</p>
        <div class="miniaturas" id="minis">  
        </div>
        
    </div>
    <div class="detalhes">
        <h3>${produtos[indiceProd].dados}</h3>
    </div>

    <div> 
        <div class="valor">
            <span class="valorCo"> R$ ${produtos[indiceProd].valorComDesconto.toFixed(2).replace(".", ",")}</span>
            <span class="valorSe"> R$ ${produtos[indiceProd].valorSemDesconto.toFixed(2).replace(".", ",")}</span>
        </div>
        <button onclick="comprar()" style="background-color: green" >comprar</button>
    </div>
    `

    let divMini = document.getElementById("minis")
    for(let y of produtos[indiceProd].img){
        divMini.innerHTML +=`
        <img src="${y}" class="mini" width="80" height="80" style="border: 1px solid #000 ; border-radius: 10px">
        `

    }

    let pequenas = document.getElementsByClassName("mini")
    for(let e of pequenas){
        e.addEventListener("mouseover", deslize)
    }

function deslize(){
    document.getElementById("frame").src = this.src
    
}
    
    
}
buscarDetalhes()