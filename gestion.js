// recuperation des donnees de depenses 
const Devoirs = document.querySelectorAll(".devoirs h6");
const Somme = document.querySelectorAll(".devoirs p");
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
        tr.remove()
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
})

// enregistrement des donnes de mes depenses dans le local Storage
function saveDepense(){
    const saveDepenss = JSON.parse(localStorage.getItem("depense"))
    
    localStorage.setItem("depense",JSON.stringify(Devoirs))
}
