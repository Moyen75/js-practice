const person = {
    "name": 'Moyen',
    "username": 'moyen75',
    "profession": 'web developer',
    "name": 'Moyen',
    "username": 'moyen750000',
    "username": 'moyen7',
    "username": 'moyen78565655665',
    "profession": 'web developer',
    "hobby": "gardening",
    "favorite_player": "Babar Azom"
}

const removeDuplicateKeys = (obj) => {
    const keys = []
    Object.keys(obj).forEach(el => {
        if (el.indexOf(el) !== -1) keys.push(el)
    })
    const newObj = {}
    keys.forEach(el => {
        if (!newObj[el]) newObj[el] = obj[el]
    })
    return newObj;
}
const newObj = removeDuplicateKeys(person)
console.log(newObj)