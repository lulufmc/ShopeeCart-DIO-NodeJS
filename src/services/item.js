async function createItem(productName, price, quantity){
    return {
        productName,
        price,
        quantity
    }
}

export default createItem