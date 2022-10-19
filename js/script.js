// Abbiamo un array di alimenti.
// Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
// Consegna:
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while

const output = document.getElementById('output');
const outputDue = document.getElementById('outputdue');

const listaSpesa = ['Pane', 'Latte', 'Pasta', 'Carne', 'Biscotti', 'Uova'];

// ciclo for


for(let i = 0; i < listaSpesa.length; i++) {
  const li = document.createElement('li');
  li.innerHTML = listaSpesa[i];
  output.append(li);
}


// ciclo while

c = 0;

while (c < listaSpesa.length) {
  const li = document.createElement('li');
  li.innerHTML = listaSpesa[c];
  outputDue.append(li);

  c++;
}