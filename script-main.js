window.addtoCart = function (id) {
    const productId = localStorage.getItem("productId");
    const cart = productId ? JSON.parse(productId) : [];
    cart.push(id);
    localStorage.setItem("productId", JSON.stringify(cart));
    console.log("in Cart: ", localStorage.getItem("productId"));
}
