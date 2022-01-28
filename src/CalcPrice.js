export function calcSubPrice(tiket) {
    return tiket.count * tiket.item.price;
  }
  export function calcTotalPrice(tikets) {
    let totalPrice = 0;
    tikets.forEach((elem) => {
      totalPrice += elem.subPrice;
    });
    return totalPrice;
  }
  
  export function getCountProductInCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    return cart ? cart.tiket.length : 0;
  }
  