let body = $('#corps')
let dialBox = $('.dialBox')
let suivant = $('#suivant')
let text = $('#text')
let charaBox = $('#charaBox')
let numDialBox = 0;
let chambre = $('#chambre')
let next = $('#next')

let nbreVictoire = $session.get('nbreVictoire');

if (nbreVictoire == 1) {
    window.alert('1');
} else {
  window.alert('0');
}

suivant.on("click", function(){
       if (numDialBox == 0) {
          charaBox.css('visibility','hidden');
          text.html("...");
          numDialBox++;
      }  else if (numDialBox == 1) {
          charaBox.css('visibility','hidden');
          chambre.css('visibility','visible');
          text.html("Une lumière blanche vous éblouit alors que vous reprenez connaissance. Vous observez la pièce dans laquelle vous vous trouvez, mais vous ne savez pas où vous êtes.");
          numDialBox++;;
      }  else if (numDialBox == 2) {
          charaBox.css('visibility','hidden');
          text.html("Vous avez beau essayer, vous n'arrivez pas à vous rappeler. Vous commencez à être effrayé et vous souvenir devient une obsession.");
          numDialBox++;
      } else if (numDialBox == 3) {
          charaBox.css('visibility','hidden');
          text.html("Vous sortez du lit et vous mettez à chercher dans la chambre des indices qui pourraient vous rafraîchir la mémoire. Un flashback vous apparaît, vous avez l’impression de voir quelqu’un dessiner.");
          numDialBox++;
      } else if (numDialBox == 4) {
          dialBox.css('visibility','hidden');
          suivant.css('visibility','hidden');
          next.css('visibility','visible');
      }
});
