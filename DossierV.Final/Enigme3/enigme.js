let pv=4;
let body = $('#corps')
let vie4 = $('.vie4')
let vie3 = $('.vie3')
let vie2 = $('.vie2')
let vie1 = $('.vie1')
let incorrect = $('.incorrect')
let win = $('.win')
let fenetre = $('.fenetre')
let fenetre1 = $('.fenetre1')
let pancarte = $('.pancarte')
let cheval = $('.cheval')
let banc = $('.banc')
let tonneau = $('.tonneau')
let porte = $('.porte')
let chapeau = $('.chapeau')
let escalier = $('.escalier')
let text = $('#text')
let dial = $('.dial')
let charaBox = $('#charaBox')
let charaName = $('#charaName')
let win1 = 0


let suivant = $('#suivant')
let numDialBox = 0
let resultat = $('#resultat')
let saloon = $('#saloon')





suivant.on("click", function(){
       if (numDialBox == 0) {

                numDialBox ++ ;
    }
      if (numDialBox == 1) {

                text.html("Vous devez cliquer sur les différents endroits du saloon pour trouver deux indices qui vous aideront à récuperer votre mémoire");
                numDialBox ++ ;
    }
else if (numDialBox == 2) {     
	dial.css("visibility","hidden");
    charaBox.css('visibility','hidden');
    vie4.css("visibility","visible");
    fenetre.css("visibility","visible");
    fenetre1.css("visibility","visible");
    pancarte.css("visibility","visible");
    banc.css("visibility","visible");
    chapeau.css("visibility","visible");
    escalier.css("visibility","visible");
    tonneau.css("visibility","visible");
    cheval.css("visibility","visible");
    porte.css("visibility","visible");
    






	fenetre.on('click',function(){
	text.html("Ces fenetres ont pas été lavées depuis quelques temps");
	dial.css('visibility','visible');
	charaBox.css('visibility','visible');
	charaName.css('visibility','visible');
	pv -= 1;
	updateLife();

});

cheval.on('click',function(){
	text.html("Ces chevaux sont vraiment magnifiques");
	dial.css('visibility','visible');
	charaBox.css('visibility','visible');
	charaName.css('visibility','visible');
	pv -= 1;
	updateLife();

});

banc.on('click',function(){
	text.html("Ce banc n'a pas l'air très solide");
	dial.css('visibility','visible');
	charaBox.css('visibility','visible');
	charaName.css('visibility','visible');
	pv -= 1;
	updateLife();
	

});

porte.on('click',function(){
	text.html("Il y a des initiales sur la porte!");
	dial.css('visibility','visible');
	charaBox.css('visibility','visible');
	charaName.css('visibility','visible');
	win1 += 1;
		if (win1 == 2) {
			updatewin();
			body.removeClass("saloon");
              body.addClass("win");
		}
	$('.porte').css('display','none');


});
tonneau.on('click',function(){
	text.html("Ce tonneau est vide");
	dial.css('visibility','visible');
	charaBox.css('visibility','visible');
	charaName.css('visibility','visible');
	pv -= 1;
	updateLife();
	

});
fenetre1.on('click',function(){
	text.html("J'arrive pas à voir à travers");
	dial.css('visibility','visible');
	charaBox.css('visibility','visible');
	charaName.css('visibility','visible');
	pv -= 1;
	updateLife();
	

});
pancarte.on('click',function(){
	text.html("Meh je crois que c'est un saloon");
	dial.css('visibility','visible');
	charaBox.css('visibility','visible');
	charaName.css('visibility','visible');
	pv -= 1;
	updateLife();
	

});
escalier.on('click',function(){
	text.html("C'est un escalier, rien de plus banal");
	dial.css('visibility','visible');
	charaBox.css('visibility','visible');
	charaName.css('visibility','visible');
	pv -= 1;
	updateLife();
	

});
chapeau.on('click',function(){
	text.html("Il me rappelle quelque chose!");
	dial.css('visibility','visible');
	charaBox.css('visibility','visible');
	charaName.css('visibility','visible');
	win1 += 1;
		if (win1 == 2) {
			updatewin();
			body.removeClass("saloon");
              body.addClass("win");
		}
	$('.chapeau').css('display','none');

});
function updateLife(){
	if (pv == 4) {
		vie4.css('visibility','visible');
	}
	if (pv == 3) {
		vie3.css('visibility','visible');
		vie4.css('visibility','hidden');

	}


	if (pv == 2) {
		vie2.css('visibility','visible');
		vie3.css('visibility','hidden');
	
	}


	if (pv == 1) {
		vie1.css('visibility','visible');
		vie2.css('visibility','hidden');
	}
	if (pv == 0) {
          	  body.removeClass("saloon");
              body.addClass("incorrect");

		vie1.css('visibility','hidden');
		charaName.css('visibility','hidden');
		charaBox.css('visibility','hidden');
		text.html("Vous n'avez pas réussi à trouver tous les indices, vous allez passer à la suite de l'histoire");
    vie4.css("visibility","hidden");
    fenetre.css("visibility","hidden");
    fenetre1.css("visibility","hidden");
    pancarte.css("visibility","hidden");
    banc.css("visibility","hidden");
    chapeau.css("visibility","hidden");
    escalier.css("visibility","hidden");
    tonneau.css("visibility","hidden");
    cheval.css("visibility","hidden");
    porte.css("visibility","hidden");
    saloon.css('visibility','hidden');
    
		resultat = 2;
		      numDialBox++
	}
}
function updatewin(){
		vie1.css('visibility','hidden');
		vie2.css('visibility','hidden');
		vie3.css('visibility','hidden');
		charaName.css('visibility','hidden');
		charaBox.css('visibility','hidden');
		saloon.css('visibility','hidden');
		body.removeClass("saloon");
        body.addClass("win");
    vie4.css("visibility","hidden");
    fenetre.css("visibility","hidden");
    fenetre1.css("visibility","hidden");
    pancarte.css("visibility","hidden");
    banc.css("visibility","hidden");
    chapeau.css("visibility","hidden");
    escalier.css("visibility","hidden");
    tonneau.css("visibility","hidden");
    cheval.css("visibility","hidden");
    porte.css("visibility","hidden");
    

		text.html("Vous avez réussi à trouver les indices, vous allez passer à la suite de l'histoire");
		resultat = 1;
		      numDialBox++
	}
}

  
       
       else if (numDialBox == 3) {

          if (resultat == 1){
          	  body.removeClass("win");
              body.addClass("saloon");
              saloon.css('visibility','visible');

              text.html("Votre migraine disparaît, vous vous souvenez avoir travaillé dans ce saloon en tant que barman.");
              numDialBox++

          }
          else if (resultat == 2){
          	  body.removeClass("incorrect");
              body.addClass("saloon");
              saloon.css('visibility','visible');
              text.html("Vous ne parvenez pas à vous souvenir de quoi que ce soit concernant ce saloon. En vous penchant sur la porte comme si vous souhaitiez entendre s’il y avait du monde, votre visage la traverse.");
              numDialBox++

          }
        }
        else if (numDialBox == 4) {

          if (resultat == 1){
              text.html("Vous vous rappelez également que vous aviez pour habitude de cacher la clé dans le tonneau à l’entrée. Vous la récupérez et entrez dans le saloon.");
              numDialBox++

          }
          else if (resultat == 2){
              text.html("Après réflexion, cela vous parait logique de pouvoir passer à travers les murs puisque votre corps n’est plus matériel.");
              numDialBox++

          }
        }
        else if (numDialBox == 5) {

          if (resultat == 1){
              text.html("En entrant, vous vous faites la réflexion qu’en tant que fantôme, vous auriez pu simplement traverser la porte sans vous entêter à trouver une clé. Mais après tout vous êtes parvenu à entrer, peu importe la manière employée.");
              numDialBox++

          }
          else if (resultat == 2){

              numDialBox++

          }
        }


















          });