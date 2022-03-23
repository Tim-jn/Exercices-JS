function anagramme(strA, strB) {


}

console.log(anagramme("Faible", " fiable")); // True
console.log(anagramme("$*^^gare", "        Rag    e")); // True
console.log(anagramme("bougie", "piano")); // False




// -----------------  Énoncé ------------------- //

// Créez un algorithme qui va retourner true si le premier paramètre est un anagramme du second, false dans le cas contraire.
// Malheuresement les entrées contiennent parfois des symboles et des espaces qu'il va falloir supprimer des chaînes.


// -----------------  Conseils ------------------- //

// Regex
// sort()
// toLowerCase()
// replace()
// join()
// split()
// comparaison "=="