

function formeboutton(formebutton)
{
	var changement=document.getElementById("butonmnu");

	if (formebutton=='border-radius:rectangle')
	{
		changement.style.width = "200px";
		changement.style.height = "150px";
		changement.style.borderRadius = "0%";

	}
	else if (formebutton=='border-radius:rond')
	{
		changement.style.borderRadius = "50% 50%";
	}
	else if (formebutton=='border-radius:ovale')
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
	if (couleurdefon=='background-color:blue')
	{
		changement.style.backgroundColor = "Blue";
	}
	else if (couleurdefon=='background-color:red')
	{
		changement.style.backgroundColor = "Red";
	}
	else if (couleurdefon=='background-color:green')
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
	if (coleurtitre=='color:purple')
	{
		changement.style.color = "purple";
	}
	else if (coleurtitre=='color:yellow')
	{
		changement.style.color = "Yellow";
	}
	else if (coleurtitre=='color:pink')
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
	if (coleurfondtitre=='background-color:white')
	{
		changement.style.backgroundColor = "white";
	}
	else if (coleurfondtitre=='background-color:beige')
	{
		changement.style.backgroundColor = "beige";
	}
	else if (coleurfondtitre=='background-color:firebrick')
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
	if (coleurfondtexte=='color:white')
	{
		changement.style.color = "white";
	}
	else if (coleurfondtexte=='color:maroon')
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
	if (emplacemettexte=='text-align:left')
	{
		changement.style.textAlign = "left";
	}
	else if (emplacemettexte=='text-align:center')
	{
		changement.style.textAlign = "center";
	}
	else if (emplacemettexte=='text-align:right')
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
	if (tailletxte=='font-size:small')
	{
		changement.style.fontSize = "1em";
	}
	else if (tailletxte=='font-size:medium')
	{
		changement.style.fontSize = "1.5em";
	}
	else if (tailletxte=='font-size:big')
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
	if (choiphoto=='src:cat')
	{
		block.src= "https://resize.prod.docfr.doc-media.fr/r/1010,,forcex/img/var/doctissimo/storage/images/fr/www/animaux/diaporamas/video-de-chat-drole/2268641-1-fre-FR/30-videos-de-chats-droles-et-mignons-a-regarder-en-boucle.jpg";

	}
	else if (choiphoto=='src:therock')
	{
		block.src = "https://i1.wp.com/blog.arcoptimizer.com/wp-content/uploads/2019/08/10-inspirations-de-dwayne-the-rock-johnson-qui-prouvent-que-tout-est-possible.jpeg?fit=2000%2C1333&ssl=1";
		
	}
	else if (choiphoto=='src:dog')
	{

		block.src = "https://www.jjsphere.com/wp-content/uploads/2019/09/jjsphere_lifestyle-billet-humeur_chien-intelligent_liste_race_sur-le-web_2.jpg";

	}
	else
	{
		block.src = "";
	}
	block.appendChild(img);
}
function emplacementboutton(emplacementbutton)
{
	var changement=document.getElementById("boite");
	if (emplacementbutton=='margin:left')
	{
		changement.style.justifyContent = "flex-start";
	}
	else if (emplacementbutton=='margin:right')
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
