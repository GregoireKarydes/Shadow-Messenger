// INITIALISATION

var key = "";
let keyInNumber =0;
let texteADecoder = document.getElementById("messageNormal").value;
let btn = document.getElementById("crypterBtn");
let texteTransform="";
let boxTransform = document.getElementById("messageCrypted").value;

function transformerLaKey() {
       for(var i = 0; i< key.length; i++) {
           keyInNumber +=key.charCodeAt(i);
       }

       keyInNumber = keyInNumber%26;

       if(keyInNumber>=15) {
        keyInNumber-=10;
      }

}



function decrypter(clair,decalage,chiffre="") {
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
              chiffre += Alphabet.charAt(idx-k);
            }
        }
  }
  console.log(k);
  return chiffre;
  };

 const crypterMonTxt = () => {
   key = document.getElementById("keyC").value;
    texteADecoder = document.getElementById("messageNormal").value;
    transformerLaKey(key);
    texteTransform = decrypter(texteADecoder,keyInNumber);
    document.getElementById("messageCrypted").value =  texteTransform;

    disparition()
}

const disparition = () => {
  btn.style.visibility = "hidden";
  document.querySelector("#txt").innerHTML = "Félicitation votre message a été décrypté";
}





