export const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

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
}