import { cart } from '../data/cart.js';
import { order } from '../data/order.js';
import { products, FetchProducts } from '../data/products.js';

console.log('order',order);
let groupBy = Object.groupBy(order,({date}) => date);

FetchProducts(()=>{
  generate_order();
});

let HTMLorder = ``;

function generate_order()
{
Object.keys(groupBy).map((key)=>{
  HTMLorder += 
  `
          <div class="order-container">
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${key}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$35.06</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${Math.random()}</div>
            </div>
          </div>
      <div class="order-details-grid">
  `
  groupBy[key].forEach((innerObj) => {
    // console.log(innerObj);
    products.forEach((Object) => {
      // console.log(Object);
    if (innerObj.productid === Object.id)
    {  
     HTMLorder += 
     `
      <div class="product-image-container">
              <img src="${Object.image}">
            </div>

            <div class="product-details">
              <div class="product-name">
                ${Object.name}
              </div>
              <div class="product-delivery-date">
                Arriving on: ${key}
              </div>
              <div class="product-quantity">
                Quantity: ${innerObj.quantity}
              </div>
              <button class="buy-again-button button-primary js-buy-again" data-productid="${Object.id}">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="tracking.html?productID=${Object.id}&date=${key}">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
     `
    }
     });
  });
   HTMLorder += 
     `</div></div>`
});
document.querySelector('.js-generate-orders').innerHTML = HTMLorder;
let get_buy_again_btn = document.querySelectorAll('.js-buy-again');
get_buy_again_btn.forEach((element) => {
  element.addEventListener('click',() => {
    // console.log(element.dataset.productid);
    cart.forEach((products_lists) => {
        if (products_lists.productid === element.dataset.productid)
        {
          products_lists.quantity += 1;
        }
      });
      order.forEach((products_lists) => {
        if (products_lists.productid === element.dataset.productid)
        {
          let get_value = Number(products_lists.quantity);
          get_value += 1;
          products_lists.quantity = get_value;
        }
      });
      sessionStorage.setItem('cart',JSON.stringify(cart));
      sessionStorage.setItem('order',JSON.stringify(order));
      window.location.reload();
  })

})
}

