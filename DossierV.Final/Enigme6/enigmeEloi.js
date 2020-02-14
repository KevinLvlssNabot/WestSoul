let suivant = $('#suivant')
let dialBox = $('.dialBox')
let valider = $('#valider')
let input = $('#input')
let suite = 2178
let page = 0
let text = $('#text')
let chrono = $('#chrono')
let numChrono = 120
let decompte = null
let next = $('#next')
let steleI = $('#steleI')
let steleNI = $('#steleNI')
let defaite = 0
let eglise = $('#eglise')
let cimetiere = $('#cimetiere')
let tombe = $('#tombe')

// $.session.get('nbreVictoire');



suivant.on('click', function(){
  if (page == 0) {
    cimetiere.css('visibility','visible');
    eglise.css('visibility','hidden');
    text.html('Vous vous rapprochez et apercevez une tombe qui vous semble familière.');
  } else if (page == 1){
    cimetiere.css('visibility','hidden');
    tombe.css('visibility','visible');
    text.html("Il s'agit en effet d'une tombe avec votre nom gravé sur sa surface, mais un détail vous dérange et vous décidez d'en faire le tour.");
  }

  else if (page == 2) {
    text.html("Il y a une inscription qui paraît codeée. Peut-être devriez-vous essayer de déchiffrer ce message numérique.");
    steleNI.css('visibility','visible');
    valider.css('visibility','visible');
    input.css('visibility','visible');
    chrono.css('visibility','visible');
    decompte = setInterval(timer, 1000);
  }

    else if (page == 3) {
            if (defaite == 1) {
              text.html("Vous fixez votre pierre tombale encore trop lisse, vos pensées se perdent dans la mélancolie.");
            } else {
              text.html("Celui-ci s’empresse de remplir un sac de plusieurs centaines de billets vert, devenus moites après avoir été saisi par les mains tremblantes de l’homme en panique.");
            }
        valider.css('visibility','hidden');
        input.css('visibility','hidden');
        dialBox.css('visibility','visible');
        clearInterval(decompte);
      } else if (page == 4) {
          if (defaite == 1) {
          text.html("Pour finalement laisser place à la colère lorsque votre regard se pose sur un mot gribouillé hâtivement sur cette pierre : “VOLEUR”.");
        } else {
          text.html("Le souvenir disparaît. Vous enfouissez votre visage dans vos mains, vous rappelant trop tard que vous n'êtes plus capable de réaliser une action aussi simple.");
        }
        valider.css('visibility','hidden');
        input.css('visibility','hidden');
        dialBox.css('visibility','visible');
        clearInterval(decompte);
      } else if (page == 5) {
        valider.css('visibility','hidden');
        input.css('visibility','hidden');
        dialBox.css('visibility','visible');
        clearInterval(decompte);
        if (defaite == 1) {
          text.html("Ne pouvant vous résoudre à encaisser cette accusation puérile, vous décidez de vous rendre à la banque de la ville, comme si vous vouliez vous prouver que vous n’auriez jamais fait une telle chose.");
        } else {
          text.html("Vous parvenez à reprendre vos esprits et continuer vos recherches dans la banque de la ville, espérant naïvement que ce souvenir des plus déplorables était erroné.");
        }
      } else if (page == 6) {
        valider.css('visibility','hidden');
        input.css('visibility','hidden');
        dialBox.css('visibility','hidden');
        next.css('visibility','visible');
        clearInterval(decompte);
      }
  page++;
});


valider.on('click',function(){
  let reponse = $('#input').val();
    if (reponse == suite)
    {
    window.alert("Bien joué, vous avez retrouvé le code caché.");
  //  nbreVictoire = nbreVictoire++;
    dialBox.css('visibility','visible');
    text.html("Un souvenir vous revient, vous vous revoyez un colt à la main, pointant le visage apeuré d'un inconnu.");
    valider.css("visibility","hidden");
    input.css('visibility','hidden');
    clearInterval(decompte);
  } else {
    window.alert("Ce n'est pas le bon code.");
  }
});

function timer(){
	numChrono --, chrono.html(numChrono);
	if (numChrono <= 0){
		clearInterval(decompte);
		window.alert("Vous avez perdu.");
		chrono.css("visibility","hidden");
    valider.css("visibility","hidden");
    input.css('visibility','hidden');
    dialBox.css('visibility','visible');
      defaite = 1;
      text.html('Impossible..');
	} else if (numChrono == 60) {
    steleI.css('visibility','visible');
    steleNI.css('visibility','hidden');
  }
}
