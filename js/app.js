var cipherOrDecipher = prompt('Ingresa 1 para cifrar y 2 para descifrar')

if (cipherOrDecipher == 1 || cipherOrDecipher == 2) {
    do { //Creando prompt que pida al usuario una frase y no permita espacios vacíos o números
        var userPhrase = prompt('Ingresa una frase');
    } while (typeof userPhrase !=='string');
    for (var i = 0; i < userPhrase.length; i++) { //Acceder a los caracteres de la frase para verificar que sean caracteres válidos.
        if (userPhrase[i] == ' ') {
            continue;
        } else if (!isNaN(userPhrase[i])) {
            userPhrase = prompt('Ingresa una frase válida');
        }
    }
} else {
    var cipherOrDecipher = prompt('Ingresa una opción válida')
}

if (cipherOrDecipher == 1) {
    cipher(userPhrase)
} else {
    decipher(userPhrase)
}


//Creando función cipher
function cipher(str) {
    emptyArray = []; //Creando array vacío para almacenar los caracteres a cifrar.
    for (var i = 0; i < str.length; i++) { //For que accede a los caracteres del string
        var singleLetter = str[i]; //Variable que representa cada uno de los caracteres del string
        if (singleLetter == ' ') { //Si un caracter es un espacio, debe insertarse en el Array vacío sin modificación
            emptyArray.push(' ');
        }
        var letterNumber = singleLetter.charCodeAt(); //Obteniendo el código ascii de los caracteres
        if (letterNumber > 64 && letterNumber <= 83) { //Condicionales que ubican el número ASCII de los caracteres, los cifran y los agregan al array vacío
            emptyArray.push(String.fromCharCode(letterNumber + 7));
        } else if (letterNumber >= 84 && letterNumber <= 90) {
            emptyArray.push(String.fromCharCode(letterNumber - 19));
        } else if (letterNumber > 96 && letterNumber <= 115) {
            emptyArray.push(String.fromCharCode(letterNumber + 7));
        } else if (letterNumber >= 116 && letterNumber < 123) {
            emptyArray.push(String.fromCharCode(letterNumber - 19));
        }
        var finalString = emptyArray.join(''); //Convirtiendo el array a un string y eliminando las comas mediante el método join
    }
    document.write(finalString); //Retornando el string ya cifrado
}


//Creando función decipher
function decipher(str) {
    decipherArray = []; //Creando array vacío para almecenar los strings decifrados
    for (var k = 0; k < str.length; k++) { //For que accede a los caracteres del string encriptado
        var encryptedLetter = str[k]; //Variable que representa cada uno de los caracteres del string encriptado
        if (encryptedLetter == ' ') { //Si un caracter es un espacio, debe insertarse en el Array sin modificación
            decipherArray.push(' ');
        }
        var encryptedNumber = encryptedLetter.charCodeAt(); //Obteniendo el código ascii de los caracteres
        if (encryptedNumber < 72 && encryptedNumber > 64) { //Condicionales que ubican el número ASCII de los caracteres, los codifican y los agregan al array vacío mediante el método push.
            decipherArray.push(String.fromCharCode(encryptedNumber + 19));
        } else if (encryptedNumber >= 72 && encryptedNumber <= 90) {
            decipherArray.push(String.fromCharCode(encryptedNumber - 7));
        } else if (encryptedNumber >= 97 && encryptedNumber < 104) {
            decipherArray.push(String.fromCharCode(encryptedNumber + 19));
        } else if (encryptedNumber >= 104 && encryptedNumber < 123) {
            decipherArray.push(String.fromCharCode(encryptedNumber - 7));
        }
        var decipherString = decipherArray.join(''); //Convirtiendo el array en un string y removiendo las comas mediante el método join.
    }
    document.write(decipherString); //Retornando el string ya decifrado
}

/*
Segunda opción cipher
var alphabet = "abcdefghijklmnopqrstuvwxyzabcdefgh";
var alphabetLetters = alphabet.split('');
var str = prompt('Ingresa una frase para encriptarla mediante el Cifrado Cesar');
if (!isNaN(str)) {
    str = prompt('Ingresa una frase válida');
}
var myArray = [];
function cipher(phrase) {
    phrase.split('');
    for (var i = 0; i < phrase.length; i++) {
        if (phrase[i] == ' ') {
            myArray.push(' ');
        }
        for (var j = 0; j < 26; j++) {
            if (phrase[i] === alphabetLetters[j]) {
                myArray.push(alphabetLetters[j + 7]);
            }
        }
    }
    return myArray.join('');
}
console.log(cipher(str));
*/
