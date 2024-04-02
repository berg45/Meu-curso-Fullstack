async function buscar(){
    let achar = await fetch("lista-produtos.json")
    let produtos = await achar.json()

    let divLista = document.getElementById("lista-card")

    for(let produto of produtos){
        divLista.innerHTML += `
        <div class="card" data-id="${produto.id}">
        <h3>${produto.nome}</h3>
        <img src="${produto.img[0]}" width="250" height="200">
        <p>${produto.descricao}</p>
            <div class="valores">
                <span class="valorCom">${produto.valorComDesconto.toFixed(2).replace("." , ",")}</span>
                <span class="valorSem">${produto.valorSemDesconto.toFixed(2).replace("." , ",")}</span>
            </div>
        
        </div>
        
        `
    }

    let divsCards = document.getElementsByClassName("card")
    for(let card of divsCards){
        card.addEventListener("click" , clicou)
    }

}

function clicou(){
    let elementoId = this.getAttribute("data-id")
    window.location.href = "detalhes.html?produto-id=" + elementoId
}

buscar()