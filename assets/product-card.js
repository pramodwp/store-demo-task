/*
Shopify Cart Api https://shopify.dev/docs/api/ajax/reference/cart
*/
function addToCart(Id, productId) {
  document.getElementById('cart-message-'+Id).innerHTML = '<div class="product_card_loader">&nbsp;</div>';
  
  var data = {
    items: [{
      id: productId,
      quantity: 1
    }]
  };

  fetch('/cart/add.js', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('cart-message-'+Id).innerHTML = 'Added to Cart!';
  })
  .catch(error => {
    document.getElementById('cart-message-'+Id).innerHTML = 'Error adding to cart';
  });
}