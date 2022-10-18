//RECUPERER LES TOUCHE DU dOM
        const touches = [...document.querySelectorAll('.bouton')];
//recuperer les datakey

        const listeKeycode = touches.map(element => element.dataset.key);
       const ecran = document.querySelector('.ecran')
//evenement Keydown des qu'une touches du clavier est presser l'evenement va se deckencher


document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();   //recup le Keycode
    calculer(valeur)

})

//cette fois ci c'est quand on click sur un bouton

document.addEventListener('click', (e) =>{

    const valeur = e.target.dataset.key
    calculer(valeur)
})

//fonction calculer

const calculer = (valeur) => {
       if (listeKeycode.includes(valeur)) {                      //verifier que le key code soit le meme que celle des touches
           switch (valeur){               //pour configurer les touche effacer et =
               case'8':
                   ecran.textContent ="";
                   break;
               case'13':
                   const calcul = eval(ecran.textContent);
                   ecran.textContent = calcul;
                   break;
               default:                             //pour que le les touches soit afficher a l'interieur de l'ecran
                   const indexKeycode = listeKeycode.indexOf(valeur);
                   const touche = touches[indexKeycode];
                   ecran.textContent += touche.innerHTML;
           }
       }
}

//faire le message alerte que ca marche pas
window.addEventListener('error', (e) =>{

  alert('Une erreur est survenue dans votre calcul : ' + e.message )
})