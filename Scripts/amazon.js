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
            $${(product.priceCents / 100).toFixed(2)}
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

          <div class="added-to-cart">
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

add_cart_btn.forEach((button) => {
  button.addEventListener('click', () => {
    let check_presence;
    let productid = button.dataset.productid;
    let cart_quantity = 0;
    cart_quantity = Number(document.querySelector('.js-select-quantity-'+productid).value) || 0 ;
    // console.log(cart_quantity);

    cart.forEach((product) => {
      if (product.productid === productid) {
        product.quantity += cart_quantity;
        check_presence = true;
      }
    });

    if (check_presence === undefined) {
      cart.push({
        productid: productid,
        quantity: cart_quantity
      });
    };

    // console.log(cart);

    //add to value to cart item
    let cartcount = 0;
    cart.forEach((item)=>{
      cartcount += item.quantity;
    });
    // console.log(cartcount);
    document.querySelector('.js-cart-count').innerHTML = cartcount;
    document.querySelector('.js-select-quantity-'+productid).value = 1;
  });
});


