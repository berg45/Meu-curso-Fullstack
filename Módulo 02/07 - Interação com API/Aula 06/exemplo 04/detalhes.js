async function buscarDetalhes(){
    let busca = await fetch("lista-produtos.json")
    let produtos = await busca.json()
    
    let parametros = new URLSearchParams(window.location.search)
    let parametroID = parametros.get("produto-id")
    alert(parametroID)
    
    
}
buscarDetalhes()