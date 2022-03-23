function voyelles(txt) {

    let vowels = /[aeiouy]/gi
    let txtSplit = Array.from(txt.split(''))
    let nbVowels = []

    for (let i = 0; i < txtSplit.length; i++) {        
        if(txtSplit[i].match(vowels)) {
            nbVowels.push(txtSplit[i])
        }
    } 
    return nbVowels
}



function NbdeVoyelles(txt) {

    let vowels = /[aeiouy]/gi
    let txtSplit = Array.from(txt.split(''))
    let nbVowels = 0

    for (let i = 0; i < txtSplit.length; i++) {        
        if(txtSplit[i].match(vowels)) {
            nbVowels++
        }
    } 
    return nbVowels
}



console.log(voyelles("jdhqgdqsghdakzejamazemlqksd")); // retourne 5
console.log(voyelles("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, aliquam?")); // retourne 28
console.log(NbdeVoyelles("L’imagination gouverne le monde.")); // retourne 13
console.log(NbdeVoyelles('zzzZZZzzzzzzzzzzzzzrezzzzzzzzAAA'));



// -----------------  Énoncé ------------------- //

// Créez un programme qui retourne le nombre de voyelles dans une chaine de caractères.

// -----------------  Conseils ------------------- //

// Vous pouvez résoudre ce programme de plusieurs façon, en itérant dans l'argument qui
// est passé et le comparer à un tableau qui contient les voyelles par exemple.
// for of
// includes()


// Une autre façon serait d'utiliser un regex et de tester l'argument qui est passé dans notre fonction avec celui-ci.
// Regex
// match()


// N'oubliez pas qu'il y a toujours énormement de façons de résoudre un algo, si vous avez des idées, lancez-vous !