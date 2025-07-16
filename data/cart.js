export const cart= [
  {
    productid :  "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity : 2
  },
  {
    productid :  "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity : 1
  },
];

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
};

export function addValuetocart()
{
    //add value to cart item
    let cartcount = 0;
    cart.forEach((item)=>{
      cartcount += item.quantity;
    });
    // console.log(cartcount);
    document.querySelector('.js-cart-count').innerHTML = cartcount;
}