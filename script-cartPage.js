import { products } from "/data/data.js";

function displayInCart() {
    const container = document.getElementById("product-container");
    const totalPriceContainer = document.getElementById("total-price");
    const cart = localStorage.getItem("cart");
    const productsInCart = cart ? JSON.parse(cart) : [];

    let totalPrice = 0;
    container.innerHTML = "";
    for (let i = 0; i < productsInCart.length; i++) {
        const product = products.find(obj => obj.id === productsInCart[i].id);
        const card = `
                    <div
                    class="d-flex flex-row custom_product-incart align-items-center border-bottom">
                        <img src="${product.image}" class="m-3">
                        <div class="row w-100"> 
                            <div class="d-flex flex-row align-items-center col-sm-8">
                                <h5>${product.name}</h5>
                            </div>
                            <div class="col-sm-4">
                                <label for="quantity">Quantity :</label>
                                <input type="number" min="1" step="1" value="${productsInCart[i].qty}" oninput="adjQty(${productsInCart[i].id},value)" class="p-2 pe-0 ms-2 border-0">
                                <h5 class="m-0 me-5">${product.price.toLocaleString()} THB</h5>
                            </div>
                        </div>
                        <div class="">
                            <button type="button" class="btn-close" aria-label="Close" onclick="delfromCart(${productsInCart[i].id});"></button>
                        </div>                    
                    </div>`
        container.insertAdjacentHTML("beforeend", card);
        totalPrice += product.price * productsInCart[i].qty;
    }
    totalPriceContainer.innerHTML = totalPrice.toLocaleString();
}

displayInCart();

window.delfromCart = function (id) {
    const cart = localStorage.getItem("cart");
    const productsInCart = cart ? JSON.parse(cart) : [];
    const indexOnFocus = productsInCart.findIndex(obj => obj.id === id);

    if (indexOnFocus !== -1) {
        productsInCart.splice(indexOnFocus, 1);
    }
    localStorage.setItem("cart", JSON.stringify(productsInCart));
    console.log("in Cart: ", localStorage.getItem("cart"));
    displayInCart();
}

window.adjQty = function (id, newQty) {
    const cart = localStorage.getItem("cart");
    const productsInCart = cart ? JSON.parse(cart) : [];
    const indexOnFocus = productsInCart.findIndex(obj => obj.id === id);

    productsInCart[indexOnFocus].qty = newQty;
    localStorage.setItem("cart", JSON.stringify(productsInCart));
    console.log("in Cart: ", localStorage.getItem("cart"));
    displayInCart();
}
