import { products } from "/data/data.js";

const container = document.getElementById("product-container");
const totalPriceContainer = document.getElementById("total-price");
const discountContainer = document.getElementById("discount");
const netPriceContainer = document.getElementById("net-price");
const cart = localStorage.getItem("cart");
const productsInCart = cart ? JSON.parse(cart) : [];

let totalPrice = 0;
container.innerHTML = "";
for (let i = 0; i < productsInCart.length; i++) {
    const product = products.find(obj => obj.id === productsInCart[i].id);
    const card = `
                    <div
                    class="d-flex flex-row custom_product-incart align-items-center border-bottom">
                        <img src="${product.image}" class="m-3" style="width: 100px">
                        <div class="row w-100"> 
                            <div class="d-flex flex-row align-items-center col-sm-8">
                                <h6>${product.name}</h6>
                            </div>
                            <div class="col-sm-4">
                                <label for="quantity">Quantity : ${productsInCart[i].qty}</label>
                            
                                <h6 class="m-0 me-5">${product.price.toLocaleString()} THB</h6>
                            </div>
                        </div>
                                           
                    </div>`
    container.insertAdjacentHTML("beforeend", card);
    totalPrice += product.price * productsInCart[i].qty;
}

totalPriceContainer.innerHTML = totalPrice.toLocaleString();

let discount = 0;
let netPrice = totalPrice - discount;

discountContainer.innerHTML = discount.toLocaleString();
netPriceContainer.innerHTML = netPrice.toLocaleString();

window.discountCalc = function (value) {
    if (value === "NEW25") {
        discount = totalPrice * 0.25;
        netPrice = totalPrice - discount;
        discountContainer.innerHTML = discount.toLocaleString();
        netPriceContainer.innerHTML = netPrice.toLocaleString();
    } else {
        discount = 0;
        netPrice = totalPrice - discount;
        discountContainer.innerHTML = discount.toLocaleString();
        netPriceContainer.innerHTML = netPrice.toLocaleString();
    }
}

const paymentMethodSelect = document.getElementById('paymentMethod');
const creditCardInfo = document.getElementById('creditCardInfo');
const paypalInfo = document.getElementById('paypalInfo');
const submitButton = document.getElementById('submitButton');

paymentMethodSelect.addEventListener('change', function () {
    if (this.value === 'creditCard') {
        creditCardInfo.style.display = 'flex';
        paypalInfo.style.display = 'none';
        document.getElementById("cardNumber").required = true;
        document.getElementById("cardName").required = true;
        document.getElementById("expirationDate").required = true;
        document.getElementById("cvv").required = true;
        document.getElementById("paypalEmail").required = false;
    } else if (this.value === 'paypal') {
        creditCardInfo.style.display = 'none';
        paypalInfo.style.display = 'flex';
        document.getElementById("cardNumber").required = false;
        document.getElementById("cardName").required = false;
        document.getElementById("expirationDate").required = false;
        document.getElementById("cvv").required = false;
        document.getElementById("paypalEmail").required = true;
    } else {
        creditCardInfo.style.display = 'none';
        paypalInfo.style.display = 'none';
    }
});


submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const deliveryForm = document.getElementById('deliveryForm');
    const paymentForm = document.getElementById('paymentForm');

    if (deliveryForm.checkValidity() === false || paymentForm.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        deliveryForm.classList.add('was-validated');
        paymentForm.classList.add('was-validated');
    } else {
        let orderedData = {
            product: productsInCart,
            discount: discount
        }

        let deliveryData = {
            firstname: document.getElementById('inputFname').value,
            lastname: document.getElementById('inputLname').value,
            email: document.getElementById('inputEmail').value,
            phone: document.getElementById('inputPhone').value,
            address: document.getElementById('inputAddress').value,
            city: document.getElementById('inputCity').value,
            state: document.getElementById('inputState').value,
            postalcode: document.getElementById('inputPostCode').value
        };

        let paymentData;
        if (paymentMethodSelect.value === 'creditCard') {
            paymentData = {
                method: 'Credit Card',
                cardNumber: document.getElementById('cardNumber').value,
                cardName: document.getElementById('cardName').value,
                expirationDate: document.getElementById('expirationDate').value,
                cvv: document.getElementById('cvv').value
            };
        } else if (paymentMethodSelect.value === 'paypal') {
            paymentData = {
                method: 'PayPal',
                paypalEmail: document.getElementById('paypalEmail').value
            };
        }

        const combinedData = {
            ordered: orderedData,
            delivery: deliveryData,
            payment: paymentData
        };
        alert("Your order has been sent.");
        localStorage.clear();
    }

});
