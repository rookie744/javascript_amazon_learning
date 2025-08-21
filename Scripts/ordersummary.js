import {get_product_current_price} from '../data/products.js'
import {centToDollar} from './utils/numberconvention.js'
export function get_order_summary() {
    let total_cents = get_product_current_price('PRICE') || 0;
    let total_quantity = get_product_current_price('QUANTITY') || 0;
    let shipping_handling = 499;
    let before_tax = (Number(total_cents) + Number(shipping_handling)) ||0
    let tax = ((before_tax) / 10) || 0;
    let total_order = before_tax + tax ||0;

    let ordersummary = 
    `          <div class="payment-summary-title">
                Order Summary
            </div>

            <div class="payment-summary-row">
                <div>Items (${total_quantity}):</div>
                <div class="payment-summary-money">$${centToDollar(total_cents)}</div>
            </div>

            <div class="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div class="payment-summary-money">$${centToDollar(shipping_handling)}</div>
            </div>

            <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="payment-summary-money">$${centToDollar(before_tax)}</div>
            </div>

            <div class="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div class="payment-summary-money">$${centToDollar(tax)}</div>
            </div>

            <div class="payment-summary-row total-row">
                <div>Order total:</div>
                <div class="payment-summary-money">$${centToDollar(total_order)}</div>
            </div>

            <button class="place-order-button button-primary">
                Place your order
            </button>
    `;
    document.querySelector('.js-order-summary').innerHTML = ordersummary;
    // console.log(ordersummary);
}