async function smartfhone(){
    let resultado = await fetch("celular.json")
    let celular = await resultado.json()
    
    for( let x in celular){
        

    document.body.innerHTML += `
    <h1>A marca do celular é ${celular[x].marca}</h1>
    <p>O modelo é ${celular[x].modelo}</p>
    <p>O armazenamento é ${celular[x].armazenamento}</p>   
    <p>a meroria ram é ${celular[x].memoriaram}</p>
    
    
 `
    }


}
smartfhone()