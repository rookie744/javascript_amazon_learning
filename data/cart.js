export let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

export function addTocart(productid)
{
    let check_presence;
    let quantity = Number(document.querySelector(`.js-select-quantity-${productid}`).value) || 0 ;
    cart.forEach((product) => {
      if (product.productid === productid) {
        product.quantity += quantity;
        check_presence = true;
      }
    });

    if (check_presence === undefined) {
      cart.push({
        productid,
        quantity
      });
    };
    document.querySelector(`.js-select-quantity-${productid}`).value = 1;
    sessionStorage.setItem('cart',JSON.stringify(cart));
};

export function cart_item_count()
{
    //add value to cart item
    let cartcount = 0;
    cart.forEach((item)=>{
      cartcount += item.quantity;
    });
    return cartcount
    // console.log(cartcount);
    // document.querySelector('.js-cart-count').innerHTML = cartcount;
};

export function delete_cart_item(item_id)
{ 
  // console.log(item_id);
  let new_cart = [];
  cart.forEach((product_list) => {
    if (product_list.productid !== item_id)
    {
      new_cart.push(product_list);
    }
  })
  cart = new_cart;

  sessionStorage.removeItem('cart') || null;
  sessionStorage.setItem('cart',JSON.stringify(cart));
};