import { products } from "/data/data.js"
console.log(products)
const index = products.find(Obj => Obj.id === 25)
console.log(index === undefined);