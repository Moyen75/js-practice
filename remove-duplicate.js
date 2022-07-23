// remove duplicate element from array

const person = ["rahim", "karim", "khalid", "mashrafi", "rahim", "karim", "moyen", "nayem", "allu"]

// first
// const newObj = {}
// person.forEach(el => {
//     if (!newObj[el]) {
//         newObj[el] = true;
//     }
// })
// console.log(Object.keys(newObj))
const removeDuplicateData = (el) => {
    const newObj = {}
    el.forEach(i => {
        if (!newObj[i]) newObj[i] = true;
    })
    return newObj.map(el => el);
}
console.log(removeDuplicateData(person))

// second
// const removeDuplicateData = (el) => {
//     const newArr = []
//     el.forEach(i => {
//         if (newArr.indexOf(i) === -1) newArr.push(i)
//     })
//     return newArr;
// }
// console.log(removeDuplicateData(person))

// third
// const removeDuplicateData = (el) => {
//     const newArr = []
//     el.forEach(i => {
//         if (!newArr.includes(i)) newArr.push(i)
//     })
//     return newArr;
// }
// console.log(removeDuplicateData(person))