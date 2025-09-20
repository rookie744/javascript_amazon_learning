import { products, FetchProducts } from '../data/products.js';

let innerHTML = ``;
let url = new URL(window.location.href);
const productID = url.searchParams.get('productID');
const date = url.searchParams.get('date');
// console.log(date);

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
                        Arriving on ${date}
                        </div>

                        <div class="product-info">
                        ${Object.name}
                        </div>

                        <div class="product-info">
                        Quantity: 1
                        </div>

                        <img class="product-image" src="${Object.image}">

                        <div class="progress-labels-container">
                        <div class="progress-label " >
                            Preparing
                        </div>
                        <div class="progress-label">
                            Shipped
                        </div>
                        <div class="progress-label">
                            Delivered
                        </div>
                        </div>

                        <div class="progress-bar-container">
                        <div class="progress-bar" style ="width:${Math.random() * 100}%"></div>
                        </div>
                `
        }
    });
    document.querySelector('.js-generate-order-tracking').innerHTML = innerHTML;
};
