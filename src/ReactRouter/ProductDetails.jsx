import React from "react";
import "./RootPages/Home.css";
import { useParams,Link } from "react-router-dom";
import PopularAPI from "../API/PopularAPI";
import { useCart } from './RootPages/CartProvider';

const ProductDetails = () => {
    const { handleAddToCart } = useCart();
  const { id } = useParams();
  const product = PopularAPI.find((p) => p.id === parseInt(id, 10));
  const rating = product.rating;

  return (
    <>
    <div className="pd">
        <div className="pdimg">
        <img src={product.image} alt={product.name} id="pdimg"/>
        </div>
        <div className="pdd">
      <h2>{product.name}</h2>
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>{index + 1 <= rating ? "⭐" : "☆"}</span>
        ))}
        <span> &nbsp;{rating}/5 </span>
      </div>
      <p>Price: {product.price}</p>
      <p>Delivery: Delivery by {product.delivery}.</p>
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
    </>
  );
};

export default ProductDetails;
