// creo dei numeri random nei dadi e gli score totali
var primo_numero, secondo_numero, terzo_numero, quarto_numero, total_score1, totale_score2;

// primo nomero random e lo inserisco nel div first_content
primo_numero = Math.floor(Math.random() * 6 + 1);
document.getElementById('first_content').innerHTML = primo_numero;

// secondo nomero random e lo inserisco nel div second_content
secondo_numero = Math.floor(Math.random() * 6 + 1);
document.getElementById('second_content').innerHTML = secondo_numero;

// terzo nomero random e lo inserisco nel div third_content
terzo_numero = Math.floor(Math.random() * 6 + 1);
document.getElementById('third_content').innerHTML = terzo_numero;

// quarto nomero random e lo inserisco nel div fourth_content
quarto_numero = Math.floor(Math.random() * 6 + 1);
document.getElementById('fourth_content').innerHTML = quarto_numero;

// calcolo il total score del primo player
total_score1 = primo_numero + secondo_numero;
// calcolo il total score del secondo player
total_score2 = terzo_numero + quarto_numero;

// visualizzo lo score totale del primo player
document.getElementById('total_score1').innerHTML = 'totale Player 1: ' + total_score1;

// visualizzo lo score totale del secondo player
document.getElementById('total_score2').innerHTML = 'totale Player 2: ' + total_score2;

// se il primo totale è maggiore del secondo totale
if(total_score1 > total_score2){
  document.getElementById('winner').innerHTML='Il vincitore è il Player 1';
}
// se il primo totale è minore del secondo totale
else if (total_score1 < total_score2){
  document.getElementById('winner').innerHTML='Il vincitore è il Player 2';
}
// se il primo totale è uguale al secondo totale
else{
  document.getElementById('winner').innerHTML='Punteggio pari';
}
