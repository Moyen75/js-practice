const products = [
    { name: "samsung", price: 13000, quantity: 1, model: "s5" },
    { name: "walton", price: 8000, quantity: 1, model: "s5" },
    { name: "oppo", price: 15000, quantity: 1, model: "s5" },
    { name: "vivo", price: 12000, quantity: 1, model: "s5" },
    { name: "nokia", price: 3000, quantity: 1, model: "s5" },
    { name: "simphony", price: 1000, quantity: 1, model: "s5" },
    { name: "realme", price: 11000, quantity: 1, model: "s5" },
    { name: "iphone", price: 130000, quantity: 1, model: "s5" },
    { name: "itel", price: 100, quantity: 1, model: "s5" },
    { name: "htc", price: 1000, quantity: 1, model: "s5" },
    { name: "vision", price: 10, quantity: 1, model: "s5" },
    { name: "vaio", price: 130, quantity: 1, model: "s5" },
]

const getCheapestPhone = (phones) => {
    let phone = phones[0]
    phones.map(el => {
        if (el.price < phone.price) phone = el;
    })
    return phone;
}
const cheapest = getCheapestPhone(products)
console.log(cheapest, `${cheapest.name} is the cheapest phone ever......`)
const getHighestPrice = (phones) => {
    let phone = phones[0]
    phones.map(el => {
        if (el.price > phone.price) phone = el;
    })
    return phone;
}
const highest = getHighestPrice(products)
console.log(highest, `${highest.name} is the highest phone ever......`)