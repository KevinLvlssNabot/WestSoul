let body = $('#corps')
let dialBox = $('.dialBox')
let suivant = $('#suivant')
let text = $('#text')
let charaBox = $('#charaBox')
let numDialBox = 0;
let chambre = $('#chambre')
let next = $('#next')
let sprite1 = $('#sprite1')
let sprite2 = $('#sprite2')
let sprite3 = $('#sprite3')
let miroir = $('#miroir')

suivant.on("click", function(){
       if (numDialBox == 0) {
          charaBox.css('visibility','hidden');
          text.html("Votre regard est empli de fierté.");
          numDialBox++;
      }  else if (numDialBox == 1) {
          charaBox.css('visibility','hidden');
          chambre.css('visibility','visible');
          text.html("Ce chaleureux souvenir recouvert, vous sentez des larmes de nostalgie couler sur vos joue, mais étrangement, aucune goutte ne vous apparait.");
          numDialBox++;;
      }  else if (numDialBox == 2) {
          charaBox.css('visibility','hidden');
          sprite1.css('visibility','hidden');
          sprite2.css('visibility','hidden');
          sprite3.css('visibility','hidden');
          text.html("Vous vous regarder dans le miroir et vous vous apercez que votre corps n'est plus, vous comprenez que vous êtes décédé, mais vous ne savez pas pourquoi ni comment.");
          miroir.css('visibility','visible');
          numDialBox++;
      } else if (numDialBox == 3) {
          charaBox.css('visibility','hidden');
          text.html("Vous décidez de sortir de chez vous afin de commencer vos recherches.");
          numDialBox++;
      } else if (numDialBox == 4) {
          dialBox.css('visibility','hidden');
          suivant.css('visibility','hidden');
          next.css('visibility','visible');
      }
});
