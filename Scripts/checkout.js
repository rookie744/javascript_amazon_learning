import {products} from '../data/products.js';
import {cart,cart_item_count} from '../data/cart.js';
import { centToDollar } from './utils/numberconvention.js';

let checkHTML ='';

cart.forEach((cart_item) => {
    let checkedout_products = '';
    products.forEach((product_list) => {
        if (product_list.id === cart_item.productid)
        {
            checkedout_products = product_list;
        }
    });
    checkHTML += `<div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${checkedout_products.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${checkedout_products.name}
                </div>
                <div class="product-price">
                  $${centToDollar (checkedout_products.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cart_item.quantity}</span>
                  </span>
                  <input type="number">
                  <span class="update-quantity-link link-primary">
                    Save
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${cart_item.productid}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${cart_item.productid}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${cart_item.productid}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`

});
document.querySelector('.js-check-items').innerHTML = checkHTML;
document.querySelector('.js-check-out-item-count').innerHTML = `${cart_item_count()} items`;

        