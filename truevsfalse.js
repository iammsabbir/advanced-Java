const age = 0; //false because 0 is a negative value

if (age){ //it means that age2 = ages2 > 0
    console.log (`condition is true`)
} else {
    console.log("condition is false")
}

const age2 = 1; //true

if (age2){ //it means that age2 = ages2 > 0
    console.log (`condition is true`)
} else {
    console.log("condition is false")
}

const name = "Shahneyaz"; //true

if (name.length){
    console.log (`condition is true`)
} else {
    console.log("condition is false")
}

const name2 = ""; //empty string means negative = false

if (name2.length){
    console.log (`condition is true`)
} else {
    console.log("condition is false")
}

//Note:
// False values- ***************
// 0
// "" (empty string)
// undefined
// null ()
// NaN (not a number)

//True values- **************
// "0" " " (space character)
// [] (array with or without values)
// {} (object with or without values)