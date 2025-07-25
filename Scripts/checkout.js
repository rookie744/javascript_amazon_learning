import {products} from '../data/products.js';
import {cart,cart_item_count, delete_cart_item} from '../data/cart.js';
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
    checkHTML += `<div class="cart-item-container js-main-container-${cart_item.productid}">
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
                    Quantity: <span class="quantity-label js-cart-quantity-value-${cart_item.productid}">${cart_item.quantity}</span>
                  </span>
                  <input value="${cart_item.quantity}" type="number" class="update-cart-input hide-fields js-input-${cart_item.productid}">
                  <span class="update-quantity-link link-primary hide-fields js-save-quantity js-save-cart-quantity-${cart_item.productid}" data-productid="${cart_item.productid}">
                    Save
                  </span>
                  <span class="update-quantity-link link-primary js-update-quantity js-update-cart-quantity-${cart_item.productid}" data-productid="${cart_item.productid}" >
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-btn" data-productid="${cart_item.productid}">
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

const get_update_element = document.querySelectorAll('.js-update-quantity');
get_update_element.forEach((update_element) => {

  update_element.addEventListener('click',(event) => {
    let {productid} = event.target.dataset;
    let input_field = document.querySelector(`.js-input-${productid}`);
    let save_span = document.querySelector(`.js-save-cart-quantity-${productid}`);
    let qunatity_label = document.querySelector(`.js-cart-quantity-value-${productid}`);

      input_field.classList.remove('hide-fields');
      save_span.classList.remove('hide-fields');

      event.target.classList.add('hide-fields');
      qunatity_label.classList.add('hide-fields');

  });
});

const get_save_element = document.querySelectorAll('.js-save-quantity');
get_save_element.forEach((save_element) => {

  save_element.addEventListener('click',(event) => {
    let {productid} = event.target.dataset;
    let input_field = document.querySelector(`.js-input-${productid}`);
    let input_span = document.querySelector(`.js-update-cart-quantity-${productid}`);
    let qunatity_label = document.querySelector(`.js-cart-quantity-value-${productid}`);
    let input_value = Number(input_field.value);
      input_field.classList.add('hide-fields');
      input_span.classList.remove('hide-fields');

      event.target.classList.add('hide-fields');
      qunatity_label.classList.remove('hide-fields');

      console.log(input_field.value);
      cart.forEach((products_lists) => {
        if (products_lists.productid === productid)
        {
          products_lists.quantity = input_value;
        }
      });
      // console.log(cart);
      sessionStorage.setItem('cart',JSON.stringify(cart));
      document.querySelector('.js-check-out-item-count').innerHTML = `${cart_item_count()} items`;
      qunatity_label.innerHTML = input_value;
  });
});

let delete_btn = document.querySelectorAll('.js-delete-btn');
delete_btn.forEach((element) => {
  element.addEventListener('click',()=>
  {
    delete_cart_item(element.dataset.productid);
    document.querySelector('.js-check-out-item-count').innerHTML = `${cart_item_count()} items`;
    const get_main_container = document.querySelector(`.js-main-container-${element.dataset.productid}`);
    get_main_container.remove();
    // console.log(element.dataset);
  }) 
})