let body = $('#corps')
let dialBox = $('.dialBox')
let suivant = $('#suivant')
let text = $('#text')
let charaBox = $('#charaBox')
let rose = $('#rose')
let tom = $('#tom')
let numDialBox = 0
let saloonint = $('.saloonint')
let cartes = $('#cartes')
let erreurs = 0
let correct = 0
let cartesjeu1 = $('#cartesjeu1')
let cartesjeu2 = $('#cartesjeu2')
let cartesjeu3 = $('#cartesjeu3')
let cartesjeu4 = $('#cartesjeu4')
let cartesjeu5 = $('#cartesjeu5')
let cartesjeu6 = $('#cartesjeu6')
let cartesjeu7 = $('#cartesjeu7')
let cartesjeu8 = $('#cartesjeu8')
let cartesjeu9 = $('#cartesjeu9')
let cartesjouables = $('.cartesjouables')
let defaite = 0
let next = $('#next')



suivant.on("click", function(){
        if (numDialBox == 0) {
              text.html("Vous avez un flashback : vous et votre femme, en pleine partie de ce jeu de cartes. Vous parvenez vaguement à vous souvenir d’une discussion que vous aviez eu à ce moment.");
              numDialBox++
          } else if (numDialBox == 1) {
              saloonint.css('visibility','hidden');
              cartes.css('visibility','visible');
              text.html("Retrouvez toutes les cartes vertes cachées, mais attention si vous trouvez trois rouges, c'est la défaite.")
              cartesjouables.css('visibility','visible');
          }
        else if (numDialBox == 2) {
            if (defaite == 1) {
                text.html("Vous faites voler les cartes dans un soupir de déception. En vous retournant, vous observez une photo du ranch de la ville.");
                cartesjouables.css('visibility','hidden');
                numDialBox++;
            } else {
              charaBox.css('visibility','visible');
              charaBox.html("Rose");
              rose.css('visibility','visible');
              text.html("Cet après-midi je compte emmener Anna au ranch voir les chevaux, tu veux venir avec nous ?");
              cartesjouables.css('visibility','hidden');
              numDialBox++;
            }

          }
        else if (numDialBox == 3) {
          if (defaite == 1) {
              text.html("Fatigué de chercher des souvenirs de votre triste existence, vous décidez plutôt de tenter de savoir comment celle-ci s’est terminée.");
              numDialBox++;
          } else {
            tom.css('visibility','visible');
            charaBox.html("Tom");
            text.html("Tu sais bien que j’ai du travail, et je n’ai pas envie de passer ma journée à m’énerver contre elle.");
            numDialBox++
          }
                }
        else if (numDialBox == 4) {
            if (defaite == 1) {
              text.html("Avant de partir vous apercevez une photo d’un ranch à gauche du comptoir, vous décidez de vous rendre au ranch pour essayer de vous souvenir de votre ancienne vie.");
              saloonint.css("visibility","visible");
              cartes.css("visibility","hidden");
              numDialBox++;
            } else {
              charaBox.html("Rose");
              text.html("Tom, je sais qu’elle a fait quelques bêtises en venant ici, mais ne soit pas trop sévère avec elle, elle n’a que 9 ans…");
              numDialBox++
            }

          }
        else if (numDialBox == 5) {
          if (defaite == 1) {
            next.css('visibility','visible');
            charaBox.css("visibility","hidden");
            dialBox.css("visibility","hidden");
          }
              charaBox.css("visibility","hidden");
              text.html("En vous rappelant ce triste souvenir, vous voyez par la même occasion à quoi vous ressembliez. Mais vous ne comprenez pas pourquoi vous seriez mort avec une vie aussi paisible?");
              numDialBox++
          }
        else if (numDialBox == 6) {
              text.html("Intrigué, vous partez maintenant à la recherche de ce qui a causé votre mort et décidez de vous rendre au ranch de votre femme.");
              numDialBox++;
              dialBox.css('visibility','hidden');
              next.css('visibility','visible');
             }


});

cartesjeu1.on('click',function(){
  dialBox.css('visibility','visible');
  text.html("C'est une mauvaise carte.");
  cartesjeu1.css('visibility','hidden');
  erreurs++;
    if (erreurs == 3) {
      text.html("Vous avez perdu.");
      numDialBox++;
      defaite = 1;
    }
});

cartesjeu5.on('click',function(){
  dialBox.css('visibility','visible');
  text.html("C'est une mauvaise carte.");
  cartesjeu5.css('visibility','hidden');
  erreurs++;
    if (erreurs == 3) {
      text.html("Vous avez perdu.")
      numDialBox++;
      defaite = 1;
    }
});

cartesjeu8.on('click',function(){
  dialBox.css('visibility','visible');
  text.html("C'est une mauvaise carte.");
  cartesjeu8.css('visibility','hidden');
  erreurs++;
    if (erreurs == 3) {
      text.html("Vous avez perdu.");
      numDialBox++;
      defaite = 1;
    }
});

cartesjeu2.on('click',function(){
  dialBox.css('visibility','visible');
  text.html("C'est une bonne carte.");
  cartesjeu2.css('visibility','hidden');
  correct++;
    if (correct == 6) {
        text.html("Vous avez gagné.");
        numDialBox++;
    }
});

cartesjeu3.on('click',function(){
  dialBox.css('visibility','visible');
  text.html("C'est une bonne carte.");
  cartesjeu3.css('visibility','hidden');
  correct++;
    if (correct == 6) {
        text.html("Vous avez gagné.");
        numDialBox++;
    }
});

cartesjeu4.on('click',function(){
  dialBox.css('visibility','visible');
  text.html("C'est une bonne carte.");
  cartesjeu4.css('visibility','hidden');
  correct++;
    if (correct == 6) {
        text.html("Vous avez gagné.");
        numDialBox++;
    }
});

cartesjeu6.on('click',function(){
  dialBox.css('visibility','visible');
  text.html("C'est une bonne carte.");
  cartesjeu6.css('visibility','hidden');
  correct++;
    if (correct == 6) {
        text.html("Vous avez gagné.");
        numDialBox++;
    }
});

cartesjeu7.on('click',function(){
  dialBox.css('visibility','visible');
  text.html("C'est une bonne carte.");
  cartesjeu7.css('visibility','hidden');
  correct++;
    if (correct == 6) {
        text.html("Vous avez gagné.");
        numDialBox++;
    }
});

cartesjeu9.on('click',function(){
  dialBox.css('visibility','visible');
  text.html("C'est une bonne carte.");
  cartesjeu9.css('visibility','hidden');
  correct++;
    if (correct == 6) {
        text.html("Vous avez gagné.");
        numDialBox++;
    }
});
