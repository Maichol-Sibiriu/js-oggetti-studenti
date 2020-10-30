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
      }
      {
        name : "mario",
        surname : "bianchi",
        age : "27",
      }
      {
        name : "marco",
        surname : "rossi",
        age : "24",
      }
   ];

});//fine documento.
