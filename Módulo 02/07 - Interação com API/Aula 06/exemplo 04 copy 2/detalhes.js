async function buscardetalhes(){
    let busca = await fetch("lista-produtos.json")
    let produtos = await busca.json()

    let paramentros = new URLSearchParams(window.location.search)
    let parametroID = paramentros.get("produto-ID")

    let indeciProd

    for(let x in produtos){
        if(produtos[x].id == parametroID){
            indeciProd = x
        }
    
    }
    document.body.innerHTML = `
    <div class="detalhes">
        <h3>${produtos[indeciProd].nome}</h3>
        <img src="${produtos[indeciProd].img}" width="250" height="250">
        <p>${produtos[indeciProd].descricao}</p>

        <div class="valor">
             <span class="valorCO">${(produtos[indeciProd].valorComDesconto.tofixed(2)).replace("." , ",")}</span>
             <span class="valorSe">${(produtos[indeciProd].valorSemDesconto.tofixed(2)).replace("," , ",")}</span>
        </div>    
    </div>
    
    `

}
buscardetalhes()