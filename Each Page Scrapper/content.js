var urlParams = new URLSearchParams(window.location.href);
var lno1 = parseInt(urlParams.get('lno'));

var E_PRICE = document.getElementById("priceblock_ourprice");

let price = E_PRICE.innerText;

console.log("lno = ", lno1);
console.log("price = ", price);

chrome.runtime.sendMessage({
  price: price,
  lno1: lno1
})