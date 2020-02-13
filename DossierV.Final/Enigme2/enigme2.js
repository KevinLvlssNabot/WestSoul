let boutons = $('.boutons')
let suivant = $('#suivant')
let dialBox = $('.dialBox')
let charaName = $('.charaName')
let charaBox = $('#charaBox')
let plan = $('#plan')
let ville = $('#ville')
let text = $('#text')
let reponse = $('.reponse')
let a = $('#a')
let b = $('#b')
let c = $('#c')
let d = $('#d')
let sprite1 = $('#sprite1')
let numDialBox = 0;
let chrono = $('#chrono')
let numChrono = 90
let decompte = null
let next = $('#next')


      a.on("click", function(){
            window.alert("Vous avez perdu.");
      resultat = 2;
      numDialBox++;
      suivant.css('visibility','visible');
      a.css('visibility','hidden');
      b.css('visibility','hidden');
      c.css('visibility','hidden');
      d.css('visibility','hidden');
      clearInterval(decompte);
     });
    b.on("click", function(){
          window.alert("Vous avez perdu.");
       resultat = 2;
      numDialBox++; 
      suivant.css('visibility','visible');
      a.css('visibility','hidden');
      b.css('visibility','hidden');
      c.css('visibility','hidden');
      d.css('visibility','hidden');
      clearInterval(decompte);
   });
    c.on("click", function(){
          window.alert("Vous avez gagné.");
      resultat = 1;
      numDialBox++;
      suivant.css('visibility','visible');
      a.css('visibility','hidden');
      b.css('visibility','hidden');
      c.css('visibility','hidden');
      d.css('visibility','hidden');
      clearInterval(decompte);
   });
    d.on("click", function(){
          window.alert("Vous avez perdu.");
      resultat = 2;
      numDialBox++; 
      suivant.css('visibility','visible');
      a.css('visibility','hidden');
      b.css('visibility','hidden');
      c.css('visibility','hidden');
      d.css('visibility','hidden');
      clearInterval(decompte);
   });

suivant.on("click", function(){
       if (numDialBox == 0) {
          dialBox.css("visibility","hidden");
          plan.css('visibility','visible');
          ville.css('visibility','hidden');
          reponse.css('visibility','visible');
          numDialBox++;
          chrono.css('visibility','visible');
          decompte = setInterval(timer, 1000);
      }
     
       else if (numDialBox == 2) {

          if (resultat == 1){

              dialBox.css("visibility","visible");
              plan.css('visibility','hidden');
              ville.css('visibility','visible');
              reponse.css('visibility','hidden');
              text.html("Vous trouvez une fille de joie assise sur le porche d’une maison.");
              numDialBox++
          }
          else if (resultat == 2){

              dialBox.css("visibility","visible");
              next.css('visibility','visible');
              suivant.css('visibility','hidden');
              plan.css('visibility','hidden');
              ville.css('visibility','visible');
              reponse.css('visibility','hidden');
              text.html("Vous errez de nombreuses heures dans les rues de la ville sans rencontrer quelconque individu. Las de cette balade silencieuse, vous décidez de vous arrêter devant un saloon.");
              numDialBox++
          }
        }
        else if (numDialBox == 3) {

          if (resultat == 1){

              dialBox.css("visibility","visible");
              charaBox.css("visibility","visible");
              sprite1.css("visibility","hidden");
              text.html("Ca fait un moment que le saloon n’ouvre plus. Je perd mes bonnes habitudes, moi, avec ça.");
              numDialBox++
          }
        }
        else if (numDialBox == 4) {

          if (resultat == 1){
              charaBox.css('visibility','hidden');
              sprite1.css("visibility","hidden");
              text.html("Vous vous rappelez alors l’avoir vu plusieurs fois dans ce saloon. Un lieu où vous aviez l’habitude d’aller vous aidera peut être à trouver des réponses ? Vous décidez de vous y rendre.");
              numDialBox++
              next.css('visibility','visible');
              suivant.css('visibility','hidden');
          }
          
        }


});

function timer(){
  numChrono --, chrono.html(numChrono);
  if (numChrono <= 0){
    clearInterval(decompte);
    window.alert("Vous avez perdu.");
    resultat = 2;
    a.css('visibility','hidden');
      b.css('visibility','hidden');
      c.css('visibility','hidden');
      d.css('visibility','hidden');
      suivant.css('visibility','visible');
      numDialBox++;
  }
}