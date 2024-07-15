import { products } from "/data/data.js";

const container_ = document.getElementById("products-container");
const container_search = document.getElementById("products-search-container");

function displayProduct(producttoDisplay, where) {
    for (let i = 0; i < producttoDisplay.length; i++) {
        const product_description = producttoDisplay[i].description.split(" / ");
        const product_price = producttoDisplay[i].price.toLocaleString();
        const card = `
        <div class="card rounded-5 m-2 p-0 custom_productCard" style="width: 18rem;">
            <img src="${producttoDisplay[i].image}" class="card-img-top rounded-5 p-3" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center product-name">${producttoDisplay[i].name}</h5>
                <ul class="card-text ps-3">
                    <li>${product_description[0]}</li>
                    <li>${product_description[1]}</li>
                    <li>${product_description[2]}</li>
                    <li>${product_description[3]}</li>
                    <li>${product_description[4]}</li>
                </ul>
                <h5 class="text-center">${product_price} THB</h5>
            </div>
            <div class="card-footer p-0">
                <button href="#" class="btn container-fluid rounded-5 rounded-top-0" 
                onclick="addtoCart(${producttoDisplay[i].id})" data-bs-toggle="modal" data-bs-target="#Modal">Add to
                Cart</button>
            </div>
        </div>`
        where.insertAdjacentHTML("beforeend", card);
    }
}

displayProduct(products, container_);
displayProduct(products, container_search);


document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const product_search = [];
    container_search.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().search(searchTerm) !== -1) {
            product_search.push(products[i]);
        }
    }
    displayProduct(product_search, container_search)
});