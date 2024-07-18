window.addtoCart = function (id) {
    const cart = localStorage.getItem("cart");
    const productsInCart = cart ? JSON.parse(cart) : [];
    const productOnFocus = productsInCart.find(obj => obj.id === id);

    if (productOnFocus === undefined) {
        productsInCart.push({ id: id, qty: 1 })
    } else {
        const indexOnFocus = productsInCart.indexOf(productOnFocus);
        productsInCart[indexOnFocus].qty += 1
    }
    localStorage.setItem("cart", JSON.stringify(productsInCart));
    console.log("in Cart: ", localStorage.getItem("cart"));
}
