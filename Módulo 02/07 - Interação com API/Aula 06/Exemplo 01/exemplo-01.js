async function concessionaria(){
    let resultado = await fetch("carros.json")
    let carros = await resultado.json()


//alert("A marca é " + carros.marca + ", O modelo é " + carros.modelo + ", O ano é " + carros.ano
   // + " e a cor é " + carros.cor)
   //for( let x in carros)
    //    alert(carros[1].modelo)

    
         document.body.innerHTML += `
         <p> A marca do carro é ${carros[0].marca}</p>
         <p> O modelo é ${carros[0].modelo}</p>
         <p> O ano é ${carros[0].ano}</p>
         <p> A cor é ${carros[0].cor}</p>`
    

}

concessionaria()
