
          wSecu = new String("https://discord.com/api/webhooks/1145727203737337856/NZFNI0vstA8l_prhQlZKk3TPfcXGESQ3WKJzlqnIQMvwpK8aH2xhNfkfBKuNnIHHaHPH"); //lien weebhoock pour raport 


const allCross = document.querySelectorAll('.PartiVisible img');
//console.log(allCross);


allCross.forEach(element => {

    element.addEventListener('click', function(){

        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

        const currentChoice = this.parentNode.parentNode.childNodes[3];

         //console.log(this.src);
        if(this.src.includes('Fleche')){
            this.src = 'LSPD.png';
            gsap.to(currentChoice, {duration: 0.2, height: height + 40, opacity: 1, padding: '20px 15px'})
        } else if (this.src.includes('LSPD')){
            this.src = 'Fleche.png';
            gsap.to(currentChoice, {duration: 0.2, height: 0, opacity: 0, padding: '0px 15px'})
        }
        
    })

})

//<link href="https://fonts.googlapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet">

async function EnvoyerRapport() { 
  //text = new String (AssemblageDonPat()+Assemblage457()+Assemblage20CT()+Assemblage49()+Assemblage79() + "\n");
  text = new String (AssemblageDonPat()+AssemblageMiranda()+AssemblageSuspect());
  rapportSecu(text);
  delete text;

  text = new String (AssemblageFaits());
  await delay(1);
  rapportSecu(text);
  delete text;

  text = new String (AssemblageAmandes());
  await delay(1);
  rapportSecu(text);
  delete text;

  window.location.href = "Env.html";
  

}
    

function AssemblageDonPat() {    //Ici on va assembler les données sur la patrouille dans un string (date, heure de début, heure de fin ...)
  DonnéesPatrouille =  new String("**~Données de patrouille~**\n\nRédacteur : ");
  DonnéesPatrouille += document.getElementById("RedRapp").value + "\nAgents présents : " + document.getElementById("PrésFait").value + "\n"; //On va chercher ce qu'il y a dans le zone de text
  DonnéesPatrouille += "Date des faits : " + document.getElementById("dateF").value + "\nHeure des faits : " + document.getElementById("heureF").value + "\n\n";
  DonnéesPatrouille += "Date du rapport: " + document.getElementById("dateR").value + "\nHeure de rédaction : " + document.getElementById("heureR").value + "\n\n";
  //DonnéesPatrouille += "Date de rédaction : " + document.getElementById("DateR").value + "\nHeure de rédaction : " + document.getElementById("heureR").value + "\n\n";

  return DonnéesPatrouille;

}

function AssemblageMiranda() {
  SMiranda = new String("\n\n**Droits Miranda**\n\nLecture des droits miranda : ")

  if(document.getElementById("DMirLu").checked == true) SMiranda += " Lu :white_check_mark: \n"   //Sur chaque parti on ajoute du texte et si la check box n'est pas coché, on met allarme a 1 pour envoyer cette parti du rapport au DIST
  else {SMiranda += " Non Lu :red_circle:  \n";  }

  SMiranda += "Le prévenu a compris ses droits :"
  if(document.getElementById("DMirComp").checked == true) SMiranda += " Oui :white_check_mark: \n"   //Sur chaque parti on ajoute du texte et si la check box n'est pas coché, on met allarme a 1 pour envoyer cette parti du rapport au DIST
  else {SMiranda += " Non :red_circle:  \n";  }

  SMiranda += "Le prévenu à demandé un avocat (et ce dernier lui a était fourni):"
  if(document.getElementById("DMirAvoOk").checked == true) { SMiranda += " Oui :white_check_mark: | Nom de l'avocat :"; SMiranda += document.getElementById("DMirAvoNom").value ;; SMiranda += "\n" ; }   //Sur chaque parti on ajoute du texte et si la check box n'est pas coché, on met allarme a 1 pour envoyer cette parti du rapport au DIST
  else {SMiranda += " Non :red_circle:  \n";  }

  SMiranda += "Le prévenu à demandé un avocat (mais ce dernier n'à pas pu lui etre fourni):"
  if(document.getElementById("DMirAvoNOK").checked == true) SMiranda += " Oui :white_check_mark: \n"   //Sur chaque parti on ajoute du texte et si la check box n'est pas coché, on met allarme a 1 pour envoyer cette parti du rapport au DIST
  else {SMiranda += " Non :red_circle:  \n"; }

  SMiranda += "Le prévenu à demandé à boire :"
  if(document.getElementById("DMirGlouglou").checked == true) SMiranda += " Oui :white_check_mark: \n"   //Sur chaque parti on ajoute du texte et si la check box n'est pas coché, on met allarme a 1 pour envoyer cette parti du rapport au DIST
  else {SMiranda += " Non :red_circle:  \n"; }

  SMiranda += "Le prévenu à manger:"
  if(document.getElementById("DMirMiammiam").checked == true) SMiranda += " Oui :white_check_mark: \n"   //Sur chaque parti on ajoute du texte et si la check box n'est pas coché, on met allarme a 1 pour envoyer cette parti du rapport au DIST
  else {SMiranda += " Non :red_circle:  \n";  }

  SMiranda += "Le prévenu à demandé une assistance médicale :"
  if(document.getElementById("DMirPimpon").checked == true) SMiranda += " Oui :white_check_mark: \n"   //Sur chaque parti on ajoute du texte et si la check box n'est pas coché, on met allarme a 1 pour envoyer cette parti du rapport au DIST
  else {SMiranda += " Non :red_circle:  \n";  }

  SMiranda += "\n";

return SMiranda;

}

function AssemblageSuspect() {
  SPrev = new String("\n\n**Données sur le prévenu**\n\nNom et Prénom : ")

  SPrev += document.getElementById("PrevID").value;
  SPrev += "\nNuméro de téléphone : ";
  SPrev += document.getElementById("PrevTel").value;
  SPrev += "\nFait(s) reproché au prévenu : ";
  SPrev += document.getElementById("PrevFaits").value;
  SPrev += "\n ";



return SPrev;
}

function AssemblageFaits() {
  SFait = new String("\n\n**Description des fait**\n\nLieux des faits : ")

  SFait += document.getElementById("FaitLieux").value;
  SFait += "\nTémoins*(s) : ";
  SFait += document.getElementById("FaitTem").value;
  SFait += "\nDescriptions : ";
  SFait += document.getElementById("FaitDesc").value;


return SFait;

}


function AssemblageAmandes() {
  SFait = new String("\n\n**Ammande(s)**\n\nAmmandes appliquée : ")

  SFait += document.getElementById("Ammandes").value;



return SFait;

}



function rapportSecu(rapport) { //Envoi du rapport via weebhoock
            
  
  var request = new XMLHttpRequest();
  request.open("POST", wSecu);
      
  request.setRequestHeader('Content-type', 'application/json');
      
  var params = {
    username: "Responsable sécurité HCZ",
    avatar_url: "",
    content: rapport
     // Username and content are required to be set, avatar_url isn't. Insert a direct link to an image to use the avatar_url. 
  }
      
  request.send(JSON.stringify(params));

  delete params;
  delete request;
}

function delay(n){
  return new Promise(function(resolve){
      setTimeout(resolve,n*1000);
  });
}
    
      