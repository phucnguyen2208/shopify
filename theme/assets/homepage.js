async function addItemCart(id,quantity) {
  return await fetch('/cart/update.js', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          "mode": "cors"
      },
      body: JSON.stringify({
        variantId:id,
        quantity:quantity
      })
  })
  .then(res => {
     res.json();
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}