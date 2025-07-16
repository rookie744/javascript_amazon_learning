import {products} from '../data/products.js';
import {cart, addTocart,addValuetocart} from '../data/cart.js';
import {centToDollar} from './utils/numberconvention.js';

// generate HTML
let productHTML = '';
products.forEach((product) => {
    productHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${(product.rating.stars * 10)}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${centToDollar(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class="js-select-quantity-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-add-cart-success-msg-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-cart" data-productid = "${product.id}">
            Add to Cart
          </button>
    </div>`;
});

// console.log(productHTML);

document.querySelector('.products-grid').innerHTML=productHTML;

//add to cart functionality
let add_cart_btn = document.querySelectorAll('.js-add-cart');
let clear_added_msg = {};
let add_to_cart_msg = {};

add_cart_btn.forEach((button) => {
  button.addEventListener('click', () => {
    let {productid} = button.dataset;
    const add_cart_msg_item = document.querySelector(`.js-add-cart-success-msg-${productid}`);
    addTocart(productid);
    addValuetocart();
    
    // console.log(add_cart_msg_item)
    if (clear_added_msg[productid])
    {
      clearTimeout(add_to_cart_msg[productid]);
    };

    add_cart_msg_item.style.opacity = 1;
    clear_added_msg[productid] = true;

    add_to_cart_msg[productid] = setTimeout(()=>
    {
      add_cart_msg_item.style.opacity = 0;
      clear_added_msg[productid] = false;
    },2000);
  });
});


