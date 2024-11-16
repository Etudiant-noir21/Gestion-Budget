// recuperation des donnees de depenses 
const tbodyDepense= document.querySelector("#depenses");
const tbodyRevenu= document.querySelector("#revenus");
// formulaire 
const formDepense = document.querySelector("#form_depense");

// page d'acceuil
const pageAcceuil= document.getElementById('page_acceuil')

// fonction creation element de depense 
function createDepense(titreDep, montantDep){
    const tr = document.createElement("tr")
    tr.style.backgroundColor = '#f1f1f1'
    tbodyDepense.appendChild(tr)
    const btnsupp =document.createElement("button")

    // creation de td
    const td1 = document.createElement('td')
    td1.innerHTML = titreDep
    tr.appendChild(td1)
    const td2 = document.createElement('td')
    td2.innerHTML = montantDep
    tr.appendChild(td2)
    const td3 = document.createElement('td')
    // td3.innerHTML = btnsupp
    tr.appendChild(td3)
    btnsupp.innerText = "Supprimer"
    btnsupp.style.backgroundColor = 'red'
    btnsupp.style.color = 'white'
    btnsupp.style.border = 'none'
    btnsupp.style.padding = '10px'
    td3.appendChild(btnsupp)

    btnsupp.addEventListener('click',function(){
        // appel de la fonction supprimer 
        tr.remove()
        supprimerDepense(titreDep)
        
    })
  
    const trajouter = document.querySelector('.depensetr')
    trajouter.parentNode.insertBefore(tr, trajouter)
}

// fonction creation element de revenu
function createRevenu(titreRev, montantRev){
    const tr = document.createElement('tr');
    const btnsupp =document.createElement("button");
    btnsupp.classList.add("btn","btn-danger","p-1");
    btnsupp.style.backgroundColor = 'red'
    btnsupp.style.border = 'none'
    btnsupp.textContent = "Supprimer";
//    creation de td
    const td1 = document.createElement('td');
    td1.innerHTML = titreRev;
    tr.appendChild(td1);
    const td2 = document.createElement('td');
    td2.innerHTML = montantRev;
    tr.appendChild(td2);
    const td3 = document.createElement('td');
    td3.appendChild(btnsupp);
    tr.appendChild(td3);
    tbodyRevenu.appendChild(tr);
    tr.style.backgroundColor = '#f1f1f1'

    btnsupp.addEventListener('click',function(){
        tr.remove()
supprimerRevenu(titreRev)

    })

    const trajouter = document.querySelector('.revenuTr')
    trajouter.parentNode.insertBefore(tr, trajouter)
}

// fonction pour le buton ajouter de depense 
const btn_ajoutDepense = document.getElementById('btn_ajout')
    btn_ajoutDepense.addEventListener('click',function(){
    pageAcceuil.style.display = "none"

    // afficher mon formulaire de depense
    const ajout_depense = document.getElementById('ajout_depense')
    ajout_depense.style.display = "block"
    
    })

// ecouter l'envoie de mon formulaire de depense 
formDepense.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    // le formulaire
   const ajout_depense = document.getElementById('ajout_depense')
   ajout_depense.style.display = 'none'

    // Reaffichage de mon page d'acceuil
    pageAcceuil.style.display = "block"

    // appel de element de mon formulaire
    const titre= document.getElementById('titre')
    const montant = document.getElementById('montant')

// appel de la fonction create depense 
createDepense(titre.value,montant.value)
saveDepense()
 formDepense.reset()
})

// pour le buton ajouter de revenu 
const btnAjoutRevenu = document.querySelector('.btnAjouRevenu')
btnAjoutRevenu.addEventListener('click',function(){
    pageAcceuil.style.display = 'none'

    // recuperation de mon formulaire d'ajout 
    const ajoutRevenu = document.getElementById('ajout_revenu')
    ajoutRevenu.style.display = 'block'
})

// ecoutons l'anvoie de mon formulaire revenu
const formRevenu = document.getElementById("form_revenu");
// console.log(formRevenu)

formRevenu.addEventListener('submit',(even)=>{
    even.preventDefault()
    const titreRev = document.getElementById('titreRev')
    const montantRev = document.getElementById('montantRev')
//    appel de ma fonction revenu
createRevenu(titreRev.value,montantRev.value)

const ajout_revenu = document.getElementById('ajout_revenu')
ajout_revenu.style.display = 'none'
    pageAcceuil.style.display = 'block'
    saveRevenu()
    formRevenu.reset()
})

// enregistrement des donnes de mes depenses dans le local Storage
function saveDepense(){
    let saveDepens =JSON.parse(localStorage.getItem("depense"))||[]
    if(!Array.isArray(saveDepens)){
        saveDepens = []
    }
    const valueTitre = document.getElementById('titre')
    const valueMontant = document.getElementById('montant')

    if(valueTitre.value && valueMontant.value){
        const nouveauDepense = {titre: valueTitre.value, montant: valueMontant.value}
        saveDepens.push(nouveauDepense)
        // enregistrer mes depenses
        localStorage.setItem("depense",JSON.stringify(saveDepens))
    }else{
        alert("Veuillez remplir les champs")

    }
    
}



// enregistrement des donnes de mes revenus dans le local Storage
function saveRevenu(){
    let saveRevenus =JSON.parse(localStorage.getItem("revenu"))||[]
    if(!Array.isArray(saveRevenus)){
        saveRevenus = []
    }
    const valueTitreRev = document.getElementById('titreRev')
    const valueMontantRev = document.getElementById('montantRev')

    if(valueTitreRev.value && valueMontantRev.value){
        const nouveauRevenu = {titre: valueTitreRev.value, montant: valueMontantRev.value}
        saveRevenus.push(nouveauRevenu)
        // enregistrer mes revenus
        localStorage.setItem("revenu",JSON.stringify(saveRevenus))
    }else{
        alert("Veuillez remplir les champs")
    }
    
}

// recuperer mes depenses 
function getDepense(){
    let saveDepens =JSON.parse(localStorage.getItem("depense"))||[]
    if(!Array.isArray(saveDepens)){
        saveDepens = []
    }
    saveDepens.forEach(function(depense){
        createDepense(depense.titre,depense.montant)
    })
}
getDepense()

// recuperer mes revenus
function getRevenu(){
    let saveRevenus =JSON.parse(localStorage.getItem("revenu"))||[]
    if(!Array.isArray(saveRevenus)){
        saveRevenus = []
    }
    saveRevenus.forEach(function(revenu){
        createRevenu(revenu.titre,revenu.montant)
    })
}
getRevenu()

// affichage de mes depenses sur la page d'acceuil

const budgets = document.querySelector('.budget')
const depenses = document.querySelector('.depense')
const soldes = document.querySelector('.solde')

function affichageDepense(){
    let budget =0
    let depensee =0
    let solde= 0

    let saveDepens = JSON.parse(localStorage.getItem('depense')) ||[]
    saveDepens.forEach(depense=>{
        depensee +=parseFloat(depense.montant) || 0
    })

    let saveRevenu = JSON.parse(localStorage.getItem('revenu')) ||[]
    saveRevenu.forEach(revenu=>{
        budget +=parseFloat(revenu.montant) ||0
    })

    budgets.textContent = budget + " FCFA"
    depenses.textContent = depensee + " FCFA"
    
    // calcule solde 
    solde = budget - depensee
    soldes.textContent = solde + ' FCFA'
}
affichageDepense()

// fonction supprimer depense
function supprimerDepense(titreDepense){
    let saveDepens =JSON.parse(localStorage.getItem("depense"))||[]
    if(!Array.isArray(saveDepens)){
        saveDepens = []
    }
    saveDepens = saveDepens.filter(function(depense){
        return depense.titre !== titreDepense
    })
    localStorage.setItem("depense",JSON.stringify(saveDepens))

    // mis a jour de mes depenses
    affichageDepense()
}

// fonction supprimer revenu
function supprimerRevenu(titreRevenu){
    let saveRevenus =JSON.parse(localStorage.getItem("revenu"))||[]

    // transformer mes revenus en tableau
    if(!Array.isArray(saveRevenus)){
        saveRevenus = []
    }
    saveRevenus = saveRevenus.filter(function(revenu){
        return revenu.titre !== titreRevenu
    })
    localStorage.setItem("revenu",JSON.stringify(saveRevenus))
    
    // mis a jour de mes revenus
    affichageDepense()
}