/* SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

const userName = prompt(`Inserisci il tuo nome`);

const guestsList = ["ospite1", "ospite2", "ospite3", "ospite4"];

let invitationResult = document.getElementById("invitationResultHtml");
let check = false;

for (let i = 0; i < guestsList.length; i++) {

    let guest = guestsList[i];

    if (userName === guest) {

        check = true;
        break;

    }

}

if (check) {

    invitationResult.innerHTML = "Benvenuto Sir, è invitato alla festa!"

} else {

    invitationResult.innerHTML = "Vattene plebeo, non sei invitato alla festa!"

}