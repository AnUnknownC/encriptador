// Mensaje Secreto
// fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!

clavesEncriptacion = {
    "e" : "enter",
    "i" : "imes",
    "a" : "ai",
    "o" : "ober",
    "u" : "ufat"
}

button = document.getElementById("copiarTexto")


function assignElementText(element, text){
    var elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

function encriptar(){
    palabra = document.getElementById('inputTexto').value;
    let traduccion = '';
    for (var i = 0; i < palabra.length; i++){
        if (palabra[i] in clavesEncriptacion){
            traduccion += clavesEncriptacion[palabra[i]];
        }
        else{
            traduccion += palabra[i];
        };
    }
    assignElementText('div', traduccion);
}

function desencriptar(){
    palabra = document.getElementById('inputTexto').value;
    let traduccion = '';
    for (var i = 0; i < palabra.length; i++){
        if (palabra[i] in clavesEncriptacion){
            traduccion += palabra[i];
            i += clavesEncriptacion[palabra[i]].length-1;
        }
        else{
            traduccion += palabra[i];
        };
    };
    assignElementText('div', traduccion);
    return traduccion;
}


button.addEventListener("click", function () {
    var textoACopiar = document.getElementById("procesoRealizado").innerText;
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = textoACopiar;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
})