import { calculateTotal } from "./cart.js"

// Shopee allows a max discount of 25% using your coins. 

async function getCoins(userCart, coins){
    let coinDiscount = coins / 100
    let finalPrice = await calculateTotal(userCart)
    
    const maxCoinDiscount = finalPrice * 0.25

    const discount = Math.min(coinDiscount, maxCoinDiscount)

    finalPrice -= discount

    return finalPrice
}

export default getCoins
    