let body = $('#corps')
let dialBox = $('.dialBox')
let suivant = $('#suivant')
let text = $('#text')
let charaBox = $('#charaBox')
let sherif = $('#sherif')
let numDialBox = 0;
let resultat = $('#resultat')
let bank = $('#bank')
let prison = $('#prison')
let sherifext = $('#sherifext')
let sherifint = $('#sherifint')

suivant.on("click", function(){
        if (numDialBox == 0) {
              charaBox.css('visibility','hidden');
              text.html("Cette fois, plusieurs souvenirs envahissent votre esprit. Vous vous voyez fuir une ville à dos de cheval. Le cheval en question est l’un de ceux que vous avez vu au ranch.");
              numDialBox++;
          }
        if (numDialBox == 1) {
              charaBox.css('visibility','hidden');
              text.html("Le souvenir se transforme, vous montre en train de dissimuler un sac plein à craquer de billets crasseux.");
              numDialBox++;
          }
        else if (numDialBox == 2) {
              charaBox.css('visibility','hidden');
              text.html("Finalement, vous vous souvenez avoir tenté de laver votre chemise blanche, tachée de sang rouge sombre.");
              numDialBox++
          }
        else if (numDialBox == 3) {
              charaBox.css('visibility','hidden');
              text.html("En essayant de remettre de l’ordre dans vos pensées, vous remarquez que cette banque ne ressemblait pas du tout à celle présente dans vos souvenirs, mais l’un de ces avis de recherche était clairement le vôtre.");
              numDialBox++
          }
        else if (numDialBox == 4) {
              charaBox.css('visibility','hidden');
              sherif.css("visibility","hidden");
              text.html("Vous pensez aussitôt à la prison en bordure de la ville.");
              numDialBox++
          }
            else if (numDialBox == 5) {
              charaBox.css('visibility','hidden');
              bank.css('visibility','hidden');
              sherifext.css('visibility','visible');
              text.html("Vous voyez un bâtiment avec des barreaux a chaque fenêtre et une une insigne de shérif, et la seule entrée est obstruée par une porte massive. Mais maintenant que vous êtes immatériel, de tels obstacles ne sont plus un soucis.")
              numDialBox++
             }
             else if (numDialBox == 6) {
               sherifext.css('visibility','hidden');
               sherifint.css('visibility','visible');
              charaBox.css('visibility','hidden');
              text.html("Vous traversez aisément les murs et vous rendez en premier lieu dans le bureau du shérif.")
              numDialBox++
             }
              else if (numDialBox == 7) {
              charaBox.css('visibility','hidden');
              text.html("Celui-ci est avachi sur la chaise de son bureau, le regard perdu dans ses pensées. Vous l’entendez murmurez.")
              numDialBox++
             }
             else if (numDialBox == 8) {
              charaBox.css('visibility','visible');
              charaBox.html("Sherif");
              sherif.css("visibility","visible");
              text.html("Qu'est ce qui t’as poussé à faire ça Tom… Tu nous a laissé un sacré bourbier en partant.")
              numDialBox++
             }
             else if (numDialBox == 9) {
              charaBox.css('visibility','hidden');
              text.html("Le silence qui suit est l’un des plus long que vous n’avez jamais vécu, si tant est qu’il était encore possible de dire cela.")
              numDialBox++
             }
             else if (numDialBox == 10) {
              charaBox.css('visibility','hidden');
              sherifint.css('visibility','hidden');
              prison.css('visibility','visible');
              sherif.css('visibility','hidden');
              text.html("Ne pouvant plus supporter cette tension sans fin, vous décidez de quitter la pièce et vous engagez dans les couloirs lugubres où se trouvent les cellules.")
              numDialBox++
             }
             else if (numDialBox == 11) {
              charaBox.css('visibility','hidden');
              text.html("En parcourant les multiples cellules tapissées de mousse et de saletés, vous vous figé devant l’une d’entre elles. Votre femme y était recroquevillée, dos au mur, les larmes roulant sur ses joues rouges et le visage déformé par la tristesse.")
              numDialBox++
             }
             else if (numDialBox == 12) {
              charaBox.css('visibility','hidden');
              text.html("Les émotions se bousculent en vous, d’une telle force que vous être brutalement balancé dans un souvenir. Celui-ci se déroule dans votre maison. Le visage rougit et vos jambes cherchant la stabilité.");
              numDialBox++
              }
             else if (numDialBox == 13) {
              charaBox.css('visibility','hidden');
              text.html("Vous étiez en train de rouer de coups votre fille accroupi au sol, en train d’hurler de douleur. Derrière vous, votre femme contemplait cette abominable scène, impuissante. Elle baissa la tête. Serra les poings. empoigna un couteau et le tint à deux mains.");
              numDialBox++
             }
             else if (numDialBox == 14) {
              charaBox.css('visibility','hidden');
              text.html("Fébrile, l’adrénaline lui donna le courage suffisant pour qu’elle se précipite vers vous. Elle enfonça la lame dans votre chaire, avant de vous laissez défaillir et chuter par terre. Vos yeux croisèrent une dernière fois ceux de votre épouse.");
              numDialBox++
              }
              else if (numDialBox == 15) {
              charaBox.css('visibility','hidden');
              text.html("Trahissant une terreur effroyable mêlée à un vague regret. Ce fut la dernière vision que vous eûtes avant de sombrer dans les ténèbres.");
              numDialBox++
               }
});
