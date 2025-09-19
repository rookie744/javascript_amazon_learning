import { products, FetchProducts } from '../data/products.js';

let innerHTML = ``;
let url = new URL(window.location.href);
const productID = url.searchParams.get('productID');

FetchProducts(()=>{
  generate_HTML();
});

function generate_HTML()
{
    products.forEach((Object) =>{
        if (Object.id === productID)
        {
            innerHTML +=
                `
                        <a class="back-to-orders-link link-primary" href="orders.html">
                        View all orders
                        </a>

                        <div class="delivery-date">
                        Arriving on Monday, June 13
                        </div>

                        <div class="product-info">
                        ${Object.name}
                        </div>

                        <div class="product-info">
                        Quantity: 1
                        </div>

                        <img class="product-image" src="${Object.image}">

                        <div class="progress-labels-container">
                        <div class="progress-label">
                            Preparing
                        </div>
                        <div class="progress-label current-status">
                            Shipped
                        </div>
                        <div class="progress-label">
                            Delivered
                        </div>
                        </div>

                        <div class="progress-bar-container">
                        <div class="progress-bar"></div>
                        </div>
                `
        }
    });
    document.querySelector('.js-generate-order-tracking').innerHTML = innerHTML;
};
