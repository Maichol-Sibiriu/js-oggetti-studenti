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

});//fine documento.
