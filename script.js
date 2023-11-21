// script.js

const picturesData = [
    { id: 1, name: 'Picture 1', price: 10 },
    { id: 2, name: 'Picture 2', price: 15 },
    { id: 3, name: 'Picture 3', price: 20 },
    // Add more pictures as needed
  ];
  
  const picturesContainer = document.getElementById('picturesContainer');
  const cartItemsContainer = document.getElementById('cartItems');
  const totalElement = document.getElementById('total');
  let cart = [];
  
  function renderPictures() {
    picturesContainer.innerHTML = '';
    picturesData.forEach(picture => {
      const pictureElement = document.createElement('div');
      pictureElement.className = 'picture';
      pictureElement.innerHTML = `
      <img src="https://picsum.photos/200/300?random=${picture.id}" alt="${picture.name}">
        <p>${picture.name}</p>
        <p>$${picture.price}</p>
        <button onclick="addToCart(${picture.id})">Buy</button>
      `;
      picturesContainer.appendChild(pictureElement);
    });
  }
  
  function renderCart() {
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
      const cartItemElement = document.createElement('div');
      cartItemElement.className = 'cart-item';
      cartItemElement.innerHTML = `
        <p>${item.name}</p>
        <p>$${item.price}</p>
      `;
      cartItemsContainer.appendChild(cartItemElement);
    });
  
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    totalElement.textContent = `Total: $${totalPrice}`;
  }
  
  function addToCart(pictureId) {
    const picture = picturesData.find(p => p.id === pictureId);
    if (picture) {
      cart.push(picture);
      renderCart();
    }
  }
  
  function clearCart() {
    cart = [];
    renderCart();
  }
  
  function pay() {
    if (cart.length > 0) {
      alert('Payment successful! Items removed from the website.');
      picturesData.forEach(picture => {
        const index = cart.findIndex(item => item.id === picture.id);
        if (index !== -1) {
          picturesData.splice(index, 1);
        }
      });
      renderPictures();
      clearCart();
    } else {
      alert('Your cart is empty. Add pictures before making a payment.');
    }
  }
  
  // Initial render
  renderPictures();
  renderCart();
  