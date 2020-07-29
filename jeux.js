

function formeboutton(formebutton)
{
	var changement=document.getElementById("butonmnu");

	if (formebutton=='Rectangle')
	{
		changement.style.width = "200px";
		changement.style.height = "150px";
		changement.style.borderRadius = "0%";

	}
	else if (formebutton=='Rond')
	{
		changement.style.borderRadius = "50% 50%";
	}
	else if (formebutton=='Ovale')
	{
		changement.style.width = "200px";
		changement.style.height = "150px";
		changement.style.borderRadius = "50% 50%";
	}
	else
	{
		changement.style.width = "150px";
		changement.style.height = "150px";
		changement.style.borderRadius = "0%";
	}
}

function couleurdfond(couleurdefon)
{
	var changement=document.getElementById("resultat");
	if (couleurdefon=='Bleu')
	{
		changement.style.backgroundColor = "Blue";
	}
	else if (couleurdefon=='Rouge')
	{
		changement.style.backgroundColor = "Red";
	}
	else if (couleurdefon=='Vert')
	{
		changement.style.backgroundColor = "Green";
	}
	else
	{
		changement.style.backgroundColor = "white";
	}
}

function couleurttre(coleurtitre)
{
	var changement=document.getElementById("titrecouleur");
	if (coleurtitre=='Violet')
	{
		changement.style.color = "purple";
	}
	else if (coleurtitre=='Jaune')
	{
		changement.style.color = "Yellow";
	}
	else if (coleurtitre=='Rose')
	{
		changement.style.color = "Pink";
	}
	else
	{
		changement.style.color = "black";
	}
}

function couleurfondttre(coleurfondtitre)
{
	var changement=document.getElementById("titrecouleur");
	if (coleurfondtitre=='Blanc')
	{
		changement.style.backgroundColor = "white";
	}
	else if (coleurfondtitre=='Beige')
	{
		changement.style.backgroundColor = "beige";
	}
	else if (coleurfondtitre=='FireBrick')
	{
		changement.style.backgroundColor = "firebrick";
	}
	else
	{
		changement.style.backgroundColor = "rgba(255,255,255,0)";
	}
}

function couleurfondtxt(coleurfondtexte)
{
	var changement=document.getElementById("textelorem");
	if (coleurfondtexte=='Blanc')
	{
		changement.style.color = "white";
	}
	else if (coleurfondtexte=='Bordeaux')
	{
		changement.style.color = "maroon";
	}
	else
	{
		changement.style.color = "black";
	}
}

function emplacementtexte(emplacemettexte)
{
	var changement=document.getElementById("textelorem");
	if (emplacemettexte=='Gauche')
	{
		changement.style.textAlign = "left";
	}
	else if (emplacemettexte=='Centre')
	{
		changement.style.textAlign = "center";
	}
	else if (emplacemettexte=='Droite')
	{
		changement.style.textAlign = "right";
	}
	else
	{
		changement.style.textAlign = "left";
	}
}

function tailletexte(tailletxte)
{
	var changement=document.getElementById("textelorem");
	if (tailletxte=='Petit')
	{
		changement.style.fontSize = "1em";
	}
	else if (tailletxte=='Normal')
	{
		changement.style.fontSize = "1.5em";
	}
	else if (tailletxte=='Grand')
	{
		changement.style.fontSize = "2em";
	}
	else
	{
		changement.style.fontSize = "1.3em";
	}
}

function choixphoto(choiphoto)
{
	var block = document.getElementById("choiceimg");
	if (choiphoto=='Chat')
	{
		block.src= "https://resize.prod.docfr.doc-media.fr/r/1010,,forcex/img/var/doctissimo/storage/images/fr/www/animaux/diaporamas/video-de-chat-drole/2268641-1-fre-FR/30-videos-de-chats-droles-et-mignons-a-regarder-en-boucle.jpg";

	}
	else if (choiphoto=='The Rock')
	{
		block.src = "https://i1.wp.com/blog.arcoptimizer.com/wp-content/uploads/2019/08/10-inspirations-de-dwayne-the-rock-johnson-qui-prouvent-que-tout-est-possible.jpeg?fit=2000%2C1333&ssl=1";
		
	}
	else if (choiphoto=='Chien')
	{

		block.src = "https://www.jjsphere.com/wp-content/uploads/2019/09/jjsphere_lifestyle-billet-humeur_chien-intelligent_liste_race_sur-le-web_2.jpg";

	}
	else
	{
		block.src = "https://www.ceo-vision.com/sites/default/files/styles/large/public/R%C3%A9gion%20Occitanie.jpg?itok=0CNY3CUo";
		// block.parentNode.removeChild(block);

	}
	block.appendChild(img);
}
function emplacementboutton(emplacementbutton)
{
	var changement=document.getElementById("boite");
	if (emplacementbutton=='Gauche')
	{
		changement.style.justifyContent = "flex-start";
	}
	else if (emplacementbutton=='Droite')
	{
		changement.style.justifyContent = "flex-end";
	}
	else
	{

	}
}

function imp(){
	var formebutton=document.getElementById("butform").value;
	var couleurdefond=document.getElementById("couleurfond").value;
	var couleurtitre=document.getElementById("colortitle").value;
	var couleurfondtitre=document.getElementById("fontcolor").value;
	var couleurfondtexte=document.getElementById("fonttexte").value;
	var emplacemettexte=document.getElementById("placetext").value;
	var tailletxte=document.getElementById("sizetext").value;
	var choiphoto=document.getElementById("fotochoix").value;
	var emplacementbutton=document.getElementById("placebutton").value;
	couleurdfond(couleurdefond);
	couleurttre(couleurtitre);
	couleurfondttre(couleurfondtitre);
	couleurfondtxt(couleurfondtexte);
	emplacementtexte(emplacemettexte);
	tailletexte(tailletxte);
	emplacementboutton(emplacementbutton);
	formeboutton(formebutton);
	choixphoto(choiphoto);

}
