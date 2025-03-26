import getCoins from "./coins.js";

function addItem(userCart, product) {
    userCart.push(product);
}

function addItemWishList(userWishList, product){
    userWishList.push(product)
    console.log(`"${product.productName}" is already in your wish list!\n`);
    
}

function deleteItem(userCart, product) {
    const index = userCart.findIndex((item) => item.productName === product.productName)
    if(index !== -1){
        userCart.splice(index, 1)
    }
}

function removeItem(userCart, product) {
    const index = userCart.findIndex((item) => item.productName === product.productName)
    
    if(index === -1){
        console.log(`Item não encontrado`);
        return;
    }
    
    if(userCart[index].quantity > 1){
        userCart[index].quantity -= 1;
        return;
    }else if(userCart[index].quantity === 1){
        userCart.splice(index, 1);
        return;
    }
    
}

function calculateTotal(userCart) {

    const result = userCart.reduce((total, item) => total + (item.price * item.quantity), 0)
    return result
    
}

async function calculateShipping(userCart){
    const price = await calculateTotal(userCart)
    const shipping = price >= 100 ? 0: 15
    return shipping
}

async function displayCart(userCart, coins) {
    console.log(`Shopee Cart List:`);
    
    userCart.forEach((item, index) => {  
        console.log(`${index + 1}. ${item.productName} - ${item.price} | ${item.quantity}x | Subtotal : R$${item.price * item.quantity}`);
    });

    let shipping = await calculateShipping(userCart)
    let finalPrice = await calculateTotal(userCart)
    let finalPriceShipping = finalPrice + shipping
    let finalPriceCoins = await getCoins(userCart, coins)

    if(finalPrice < 100){

        console.log(`\n💵 The final price without discounts is R$${finalPrice}, and with shipping, it is R$${finalPriceShipping}.`);
        console.log(`🪙  The final price with the coin discount is R$${finalPriceCoins}, and with shipping, it is R$${finalPriceCoins + shipping}.`);

    } else if(finalPrice >= 100) {

        console.log(`\n💵 The final price without discounts is R$${finalPrice}, and with free shipping.`);
        console.log(`🪙  The final price with the coin discount is R$${finalPriceCoins}, and with free shipping.`);

    }
    
}


export {
    addItem,
    deleteItem,
    removeItem,
    displayCart,
    calculateTotal,
    addItemWishList
}