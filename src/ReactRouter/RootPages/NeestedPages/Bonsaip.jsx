import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";
import popularAPI from "../../../API/PopularAPI";
import { useCart } from '../CartProvider';
import { useWishlist } from '../CartProvider';

const Bonsaip = () => {
  const { handleAddToCart } = useCart();
  const { handleAddToWishlist } = useWishlist();
  const filteredDatab3 = popularAPI.filter((product) => product.id >= 36 && product.id <= 40);
  const filteredDatab4 = popularAPI.filter((product) => product.id >= 41 && product.id <= 45);

  return (
    <>
      <div className="ban" id="carou">
        <img src="/image/cercar2.jpg" className="Car" id="Image" alt="..." />
      </div>
      <div className="cerh">
        <h4>Plants</h4>
      </div>
      <div className="ce">
        {filteredDatab3.map((product) => (
          <div className="card" id="cer" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} className="card-img-top" alt="..." id="imgcard" />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text" style={{fontSize:"0.7rem"}}>pack of {product.unit}</p>
              <p className="card-text">₹{product.price}</p>
              <div className="cbtn">
                <button className="btn btn-primary" id="atc" onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
                <Link to="#">
                  <button className="btn btn-primary" id="bn">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="wish">
              <div className="wish2" onClick={() => handleAddToWishlist(product)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="wish3"
                  width="16"
                  height="16"
                  viewBox="0 0 20 16"
                >
                  <path
                    d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                    fill="#2874F0"
                    className="eX72wL"
                    stroke="#FFF"
                    fillRule="evenodd"
                    opacity=".9"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
    </div >

      <div className="ce">
        {filteredDatab4.map((product) => (
          <div className="card" id="cer" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} className="card-img-top" alt="..." id="imgcard" />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text" style={{fontSize:"0.7rem"}}>pack of {product.unit}</p>
              <p className="card-text">₹{product.price}</p>
              <div className="cbtn">
                <button className="btn btn-primary" id="atc" onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
                <Link to="#">
                  <button className="btn btn-primary" id="bn">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="wish">
              <div className="wish2" onClick={() => handleAddToWishlist(product)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="wish3"
                  width="16"
                  height="16"
                  viewBox="0 0 20 16"
                >
                  <path
                    d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                    fill="#2874F0"
                    className="eX72wL"
                    stroke="#FFF"
                    fillRule="evenodd"
                    opacity=".9"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div >
    </>
  );
};

export default Bonsaip;
