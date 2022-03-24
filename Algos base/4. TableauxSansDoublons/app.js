function tableauxSansDoublons(...arrays) {

    let fullArray = arrays
    let newArray = []

    fullArray.forEach(item => {
        for (let i = 0; i < item.length; i++) {
            if(!newArray.includes(item[i])) {
                newArray.push(item[i])
            }
        }
    })

    return newArray;
}


console.log(tableauxSansDoublons([5,5,5,5,5,4], [6,3,5])); // [5, 4, 6, 3]
console.log(tableauxSansDoublons(["a","b","z"],["z","e","a"])); // ["a", "b", "z", "e"]


// -----------------  Énoncé ------------------- //

// Créez un algorithme qui assemble tous les tableaux que l'on passe en argument, sans avoir de doublons(si il y a deux fois(ou plus) la même valeur, supprimez la).


// -----------------  Conseils ------------------- //

// Array.from(arguments)
// filter()
// forEach()
// push()
// indexOf







