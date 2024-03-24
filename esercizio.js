const prices = [34, 5, 2]
let somma=0
for(let i=0; i<prices.length; i++){

    somma+=prices[i]
}
console.log("la somma dell' arrey è " + somma)



const isAmbassador= true
if(isAmbassador){
    const sconto= somma *0.30;
    const sommaScontata= somma-sconto
    const arrotondamento=sommaScontata.toFixed(2)
    console.log("Utente con  valore isAmbassador true paga " + arrotondamento)
}

const shippingCost = 50
const arrotondamento=28.70

if(arrotondamento<100){
    importoFinale= arrotondamento + shippingCost
}


console.log(importoFinale)
