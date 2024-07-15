import { products } from "/data/data.js";

const container_ = document.getElementById("products-container");

for (let i = 0; i < 8; i++) {
    const product_description = products[i].description.split(" / ");
    const product_price = products[i].price.toLocaleString();
    const card = `
    <div class="card rounded-5 m-2 p-0 custom_productCard" style="width: 18rem;">
        <img src="${products[i].image}" class="card-img-top rounded-5 p-3" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${products[i].name}</h5>
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
            onclick="addtoCart(${products[i].id})" data-bs-toggle="modal" data-bs-target="#Modal">Add to
            Cart</button>

            <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header d-flex flex-column border-0">
                            <h1 class="modal-title fs-5 p-3" id="ModalLabel">Product Added</h1>
                            <button type="button" class="btn  rounded-5" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>`
    container_.insertAdjacentHTML("beforeend", card);
}
