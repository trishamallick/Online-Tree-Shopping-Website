import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { useWishlist } from './CartProvider';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
  };

  const getUniqueItems = () => {
    const uniqueItems = wishlistItems.reduce((acc, item) => {
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

  return (
    <>
    <div className="ban" id="carou">
        <img src="/image/banner5.jpg" className="Car" id="Image" alt="..." />
      </div>
      <div className='tatc'>
        <h2 id='cartw'>Wishlist</h2>
        {wishlistItems.length === 0 ? (
          <div style={{ fontSize: "2rem", marginLeft: "6rem", width: "100%" }}>
            <p>Your wishlist is empty !.</p>
          </div>
        ) : (
          getUniqueItems().map((item) => (
            <div key={item.id} className='atc'>
              <p><img src={item.image} alt='Product' style={{ width: '11rem', height: "11rem" }} /></p>
              <div className="det">
                <p>{item.name}</p>
                <p>Price: ₹{item.price}</p>
              </div>
              <div className="rem">
              <button onClick={() => handleRemoveFromWishlist(item.id)} style={{border:"none"}} id='rem'><FontAwesomeIcon icon={faTrash} style={{color: "#c82b04",}} /></button>
              </div>
            </div>
          ))
        )}

        <Link to="/"><button id='bthw'>Back to Home</button></Link>
      </div>
    </>
  );
};

export default Wishlist;
