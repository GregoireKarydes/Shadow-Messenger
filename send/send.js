// INITIALISATION

var key = document.getElementById("keyC").value;
let indice = document.getElementById("indice").value;
let keyInNumber =0;
let texteACoder = document.getElementById("messageNormal").value;
let btn = document.getElementById("crypterBtn");
let texteTransform="";
let boxTransform = document.getElementById("messageCrypted").value;

function transformerLaKey() {
       for(var i = 0; i< key.length; i++) {
           keyInNumber +=key.charCodeAt(i);
       }

}


function crypter(clair,decalage,chiffre="") {
  Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
  clair = clair.toUpperCase();
  k=parseInt(decalage);
  while(k<0) {k+=26};
   while(k>25) {k-=26};
  chiffre = "";
  for(var count = 0; count < clair.length; count++) {
    alpha = clair.charAt(count);
    if (alpha == " ")
        { chiffre+=" " }
    else {
        idx = Alphabet.indexOf(alpha);
        if (idx > -1)     // ne (dé)chiffre que les 26 lettres majuscules
            {
              chiffre += Alphabet.charAt(idx+k);
            }
        }
  }

  return chiffre;
  };

 const crypterMonTxt = () => {
    key = document.getElementById("keyC").value;
    indice = document.getElementById("indice").value;
    texteACoder = document.getElementById("messageNormal").value;
    transformerLaKey(key);
    texteTransform = crypter(texteACoder,keyInNumber);
    document.getElementById("messageCrypted").value = "Bonjour, vous avez reçu un message crypté. \n Afin de le lire merci de remplir la clef de décryptage !" +
    "\n Indice pour la trouver : " + indice + '\nEn vous randant sur https://gregoirekarydes.github.io/Shadow-Messenger/' + "\nVoici votre message : " + texteTransform;

    disparition()
}

const disparition = () => {
  btn.style.visibility = "hidden";
  document.querySelector("#txt").innerHTML = "Félicitation votre message à été crypté";
}





