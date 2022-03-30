let aux, aux2, lista = [];
var texto = prompt('Ingrese el texto:');

texto = texto.split(" ");

for (let a = 0; a < texto.length; a++){
    aux = texto[a]
    aux = aux.replace(",", "");

    let str_reverse = ""
    for (let b = 0; b < aux.length; b++){
        aux2 = aux[b]
        str_reverse = aux2 + str_reverse
    }

    if (str_reverse == aux) {
        lista.push(aux)
    };
};


document.getElementById('p1').innerHTML = lista.toString();