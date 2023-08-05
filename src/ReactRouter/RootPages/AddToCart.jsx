import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { useCart } from './CartProvider';

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrement = (productId) => {
    incrementQuantity(productId);
    const updatedItem = cartItems.find((item) => item.id === productId);
    if (updatedItem && updatedItem.quantity === 0) {
      removeFromCart(productId);
    }
  };

  const handleDecrement = (productId) => {
    decrementQuantity(productId);
    const updatedItem = cartItems.find((item) => item.id === productId);
    if (updatedItem && updatedItem.quantity === 1) {
      removeFromCart(productId);
    }
  };

  const getUniqueItems = () => {
    const uniqueItems = cartItems.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);
    return uniqueItems;
  };

  const getTotalPrice = () => {
    return cartItems.map((item) => item.price * item.quantity).reduce((total, item) => total + item, 0);
  };

  return (
    <>
    <div className="ban" id="carou">
        <img src="/image/banner2.jpg" className="Car" id="Image" alt="..." />
      </div>
    <div className='tatc'>
      <h2 id='cart'>Cart products</h2>
      {cartItems.length === 0 ? (
          <div style={{ fontSize: "2rem", marginLeft: "6rem", width: "100%" }}>
            <p>Your wishlist is empty !.</p>
          </div>
        ) : (
      getUniqueItems().map((item) => (
        <div key={item.id} className='atc'>
          <p><img src={item.image} alt='Product' style={{ width: '11rem', height:"11rem" }}/></p>
          <div className="det">
            <p>{item.name}</p>
            <p>Price: ₹{item.price}</p>
          </div>
          <div className="inde">
            <button onClick={() => handleDecrement(item.id)} id='inde'>-</button>&nbsp;
            {item.quantity}
            <button onClick={() => handleIncrement(item.id)} id='inde'>+</button>
          </div>
          <div className="rem">
            <button onClick={() => handleRemoveFromCart(item.id)} style={{border:"none"}} id='rem'><FontAwesomeIcon icon={faTrash} style={{color: "#c82b04",}} /></button>
          </div>
        </div>
      ))
      )}
      <p id='cart'><h4>Total Price: ₹{getTotalPrice()}</h4></p>

      <Link to="/"><button id='bth'>Back to Home</button></Link>
    </div>
    </>
  );
};

export default Cart;