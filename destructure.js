// obj destructure
const obj = {
    name: "moyen islam",
    age: 23,
    nationality: "bangladeshi",
    hobby: {
        cricket: true,
        football: true,
        hadudu: true,
    }
}
const { name, age, nationality, hobby, hobby: { cricket, football } } = obj;


// array destructure
const players = ["tamim", "shakib", "mushfiq", "mashrafi", "riad", "mustafiz"]

const [a, b, c, d, e, f] = players

console.log(a, b, c, d, e, f) //tamim shakib mushfiq,mashrafi riad mustafiz

const [m, ...n] = players;
console.log(m, n) //tamim ["shakib", "mushfiq", "mashrafi", "riad", "mustafiz"] 