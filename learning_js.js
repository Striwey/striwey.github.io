
var texto = window. prompt("Write the text to evaluate: "), palindromos, aux = "";
texto = texto.split(" ")

let aux, aux2, lista = [], str_reverse = "";

for (let a = 0; a < texto.length; a++){
    aux = texto[a]
    for (let b = 0; b < aux.length; b++){
        aux2 = aux[b]
        str_reverse = aux2 + str_reverse
    }
    if (str_reverse == aux) {
        lista.push(str_reverse)
    }
}


document.getElementById('demo').innerHTML = lista.toString();