let montant = 31000

/*--------------------AFFICHE1--------------------*/
$('.wanted1').on('click', function(){
	$(".wanted1Zoom").css('visibility','visible')
	$('.close').css('visibility','visible')
});


/*--------------------AFFICHE2--------------------*/
$('.wanted2').on('click', function(){
	$(".wanted2Zoom").css('visibility','visible')
	$('.close').css('visibility','visible')
});


/*--------------------AFFICHE3--------------------*/
$('.wanted3').on('click', function(){
	$(".wanted3Zoom").css('visibility','visible')
	$('.close').css('visibility','visible')
});


/*--------------------AFFICHE4--------------------*/
$('.wanted4').on('click', function(){
	$(".wanted4Zoom").css('visibility','visible')
	$('.close').css('visibility','visible')
});


/*--------------------REGISTRE--------------------*/
$('.registre').on('click', function(){
	window.alert('Retrouvez le montant du criminel le plus recherché - celui mois ayant le plus rapporté à la banque.')
	$(".registreZoom1873").css('visibility','visible')
	$('.close').css('visibility','visible')
	$('.droite').css('visibility','visible')
	$('.gauche').css('visibility','visible')
	$('#input').css('visibility','visible')
	$('#valider').css('visibility','visible')

});


$('.gauche').on('click',function() {
	$(".registreZoom1873").css('visibility','hidden')
	$(".registreZoom1872").css('visibility','visible')
});

$('.droite').on('click',function() {
	$(".registreZoom1873").css('visibility','hidden')
	$(".registreZoom1874").css('visibility','visible')
});




$('.close').on('click', function(){
	$(".wanted1Zoom").css('visibility','hidden')
	$(".wanted2Zoom").css('visibility','hidden')
	$(".wanted3Zoom").css('visibility','hidden')
	$(".wanted4Zoom").css('visibility','hidden')
	$('.droite').css('visibility','hidden')
	$('.gauche').css('visibility','hidden')
	$(".registreZoom1872").css('visibility','hidden')
	$(".registreZoom1873").css('visibility','hidden')
	$(".registreZoom1874").css('visibility','hidden')

});


$('#valider').on('click',function(){
let reponse = $('#input').val();
	if (reponse == montant)
	{
	window.alert("Bien joué, vous avez retrouvé le code caché. Vous pouvez appuyer sur la prochaine scène.");
}
});
