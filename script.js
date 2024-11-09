const tauxInteret = 0.03
let solde = 1000
let depot = 200
let retrait = 150
const historiqueOperations=[]

/* Depot argent */

function ajoutDepot(solde,depot){
    let nouveauSolde = solde + depot
    return nouveauSolde
}

console.log("Vous avez déposé " + depot + " euros. Nouveau solde: " + ajoutDepot(solde,depot) + " euros")
historiqueOperations.push("Dépot de 200 euros")


/* Retrait argent */

function retraitSolde(solde,retrait){
    if(retrait <= solde){
        let soldeApresRetrait = solde - retrait
        return retraitArgent ="Vous avez retire " + retrait + " euros. Nouveau solde: " + soldeApresRetrait + " euros"
    }else{
        return retraitArgent= "Solde insuffisant pour effectuer ce retrait"
    }
}

if(retrait<=solde){
    historiqueOperations.push("Retrait de 150 euros")
}

console.log(retraitSolde(solde,retrait))

/* Calcul des intêrets */

function soldeInteret(solde,tauxInteret){
    let soldeAvecInteret = (solde*tauxInteret)+solde
    return soldeAvecInteret
}

console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : " + soldeInteret(solde,tauxInteret) + " euros")

historiqueOperations.push("interets de 3%")

/* Simulation de plusieurs opéraions */
let nouveauDepot = 500

console.log("Vous avez déposé "+ nouveauDepot +" euros. Nouveau solde: "+ ajoutDepot(solde,nouveauDepot)+ " euros")

historiqueOperations.push("Dépot de 500 euros")

solde = ajoutDepot(solde,nouveauDepot)

let nouveauRetrait = 800

console.log(retraitSolde(solde,nouveauRetrait))

if(nouveauRetrait<=solde){
    historiqueOperations.push("Retrait de 800 euros")
}

solde= solde-nouveauRetrait

console.log("Intérêts annuels de 3% ajoutés. Nouveau solde: "+soldeInteret(solde,tauxInteret)+" euros")

historiqueOperations.push("Intérêts de 3%")

for(let i = 0; i< historiqueOperations.length ; i++){
    console.log(historiqueOperations[i] + " Indice :" + i)
}

