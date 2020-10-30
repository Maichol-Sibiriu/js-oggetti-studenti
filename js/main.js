// javascript
$(document).ready( function() {

   // oggetto studente
   var student = {
      name : "maichol",
      surname : "sibiriu",
      age : "34",
   };
   console.log(student.surname);

   // stampa con for..in delle proprieta'
   for (var key in student) {
     console.log(student[key]);
   }

   // array di oggetto studenti
   var list = [
      {
        name : "maichol",
        surname : "sibiriu",
        age : "34",
      },
      {
        name : "marika",
        surname : "verdi",
        age : "30",
      },
      {
        name : "mario",
        surname : "bianchi",
        age : "27",
      },
      {
        name : "marco",
        surname : "rossi",
        age : "24",
      },
    ];

   // ciclo per stampa studenti
   for (var i = 0; i < list.length; i++) {
     console.log(list[i].name ,list[i].surname);
   }

   // creazione prompt utente
   // oggetto vuoto
     var user = {};

     // domande per utente
      // domanda 1
      var ask1 = prompt("inserisci nome").trim().toLowerCase();
      while (!isNaN(ask1)) {
       var ask1 = prompt("valore non valido,inserisci nome").trim().toLowerCase();

        if (isNaN(ask1)) {
         user.name = ask1;
        }
      }
      // domanda 2
      var ask2 = prompt("inserisci cognome").trim().toLowerCase();
      while (!isNaN(ask2)) {
       var ask2 = prompt("valore non valido,inserisci cognome").trim().toLowerCase();

        if (isNaN(ask2)) {
         user.surname = ask2;
        }
      }
      // domanda 3
      var ask3 = ( prompt("inserisci eta'") );
      while (isNaN(ask3)) {
        var ask3 = ( prompt("valore non valido,inserisci eta'") );
        if (!isNaN(ask3)) {
         user.age = ask3;
        }
      }
      console.log(user);

      // inserimento proprieta' nell'oggetto vuoto
      // inserimento dati utente nella lista
      list.push(user);
      console.log(list);
});//fine documento.
