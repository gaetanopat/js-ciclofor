//array contenente le email
var email = ['pippo@gmail.com','gaetano.patierno97@gmail.com','prova@gmail.com','ciao@hotmail.com','salute@gmail.com','bene@hotmail.com'];
//variabile booleana
var trovato = false;
//faccio inserire l'email dall'utente
var input_email = prompt('Inserisci l\'email da verificare');

document.getElementById('welcome').innerHTML='Benvenuto <br><br>';
document.writeln('Riepilogo informazioni: <br>');
document.writeln('Email inserita: ' + input_email + '<br><br>');

//ciclo for per controllare tutto l'array
for (var i = 0; i < email.length; i++){
  //se trova l'uguaglianza allora la salverò in una variabile che definisco all'inizio in "false"
  if(email[i] == input_email){
    trovato = true;
  }
}
//se la variabile diventa "true" allora sarò valida
if(trovato == true){
  document.writeln('L\'email ' + input_email + ' è valida.');
}
//altrimnenti sarà errata o scritta male
else{
  document.writeln('L\'email ' + input_email + ' non esiste. Ricontrolla l\'email inserita.');
}
