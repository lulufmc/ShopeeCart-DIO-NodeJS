import { addItem, addItemWishList, deleteItem, displayCart, removeItem } from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = []
const myWishList = []
const coins = 1200

console.log(`\nWelcome to your shopee cart! 🛒\n`);

const item1 = await createItem('Mouse wireless', 74.99, 4)
const item2 = await createItem('Mechanical Keyboard', 99.99, 3)
const item3 = await createItem('Mousepad', 40, 2)
const item4 = await createItem('USB Hub', 30, 2)


addItem(myCart, item1)
addItem(myCart, item2)
addItem(myCart, item3)

deleteItem(myCart, item1)
deleteItem(myCart, item2)

addItemWishList(myWishList, item4)

removeItem(myCart, item3)

await displayCart(myCart, coins)

