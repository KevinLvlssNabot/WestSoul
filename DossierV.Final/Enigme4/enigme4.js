let body = $('#corps')
let dialBox = $('.dialBox')
let suivant = $('#suivant')
let text = $('#text')
let charaBox = $('#charaBox')
let rose = $('#rose')
let tom = $('#tom')
let numDialBox = 0
let saloonint = $('.saloonint')


suivant.on("click", function(){
        if (numDialBox == 0) {
              text.html("Vous avez un flashback : vous et votre femme, en pleine partie de ce jeu de cartes. Vous parvenez vaguement à vous souvenir d’une discussion que vous aviez eu à ce moment.");
              numDialBox++
          }
        else if (numDialBox == 1) {
              charaBox.css('visibility','visible');
              charaBox.html("Rose");
              text.html("Cet après-midi je compte emmener Anna au ranch voir les chevaux, tu veux venir avec nous ?");
              numDialBox++
          }
        else if (numDialBox == 2) {
              charaBox.html("Tom");
              text.html("Tu sais bien que j’ai du travail, et je n’ai pas envie de passer ma journée à m’énerver contre elle.");
              numDialBox++
          }
        else if (numDialBox == 3) {
              charaBox.html("Rose");
              text.html("Tom, je sais qu’elle a fait quelques bêtises en venant ici, mais ne soit pas trop sévère avec elle, elle n’a que 9 ans…");
              numDialBox++
          }
        else if (numDialBox == 4) {
              charaBox.css("visibility","hidden");
              text.html("En vous rappelant ce triste souvenir, vous voyez par la même occasion à quoi vous ressembliez. Mais vous ne comprenez pas pourquoi vous seriez mort avec une vie aussi paisible?");
              numDialBox++
          }
        else if (numDialBox == 5) {
              text.html("Intrigué, vous partez maintenant à la recherche de ce qui a causé votre mort et décidez de vous rendre au ranch de votre femme.");
              numDialBox++
             }


});
