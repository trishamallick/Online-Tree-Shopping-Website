import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import PopularAPI from "../../API/PopularAPI";
import { useCart } from './CartProvider';
import {useWishlist} from './CartProvider';

const Home = () => {
  const { handleAddToCart } = useCart();
  const { handleAddToWishlist } = useWishlist();

  const filteredDatah1 = PopularAPI.filter(
    (product) => product.id >= 1 && product.id <= 5
  );
  const filteredDatat1 = PopularAPI.filter(
    (product) => product.id >= 56 && product.id <= 60
  );
  const filteredDatat2 = PopularAPI.filter(
    (product) => product.id >= 61 && product.id <= 65
  );
  const filteredDatat3 = PopularAPI.filter(
    (product) => product.id >= 66 && product.id <= 70
  );

  return (
    <>
        <div className="contain">
          <div className="imagesl">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="../image/banner4.jpg"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="../image/banner6.jpg"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="../image/banner1.jpg"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="mid">
            <div className="head1">Categories</div>
            <div className="popular">
              {filteredDatah1.map((product) => {
                return (
                  <>
                    <div className="card" id="cat">
                      <Link to={product.link}>
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt="..."
                          id="imgcard"
                        />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="mid">
            <div className="head1">Trending Products</div>
            <div className="popular">
              {filteredDatat1.map((product) => {
                return (
                  <>
                    <div className="card" key={product.id}>
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt="..."
                          id="imgcard"
                        />
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
                  </>
                );
              })}
            </div>
          </div>

          <div className="mid">
            <div className="head1">Top Selling Products</div>
            <div className="popular">
              {filteredDatat2.map((product) => {
                return (
                  <>
                    <div className="card">
                      <Link to={`/PopularAPI/${product.id}`}>
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt="..."
                          id="imgcard"
                        />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text" style={{fontSize:"0.7rem"}}>pack of {product.unit}</p>
                        <p className="card-text">₹{product.price}</p>
                        <Link to="#">
                          <button className="btn btn-primary" id="atc" onClick={() => handleAddToCart(product)} >
                            Add To Cart
                          </button>
                        </Link>
                        <Link to="#">
                          <button className="btn btn-primary" id="bn">
                            Buy Now
                          </button>
                        </Link>
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
                              opacity=".9">
                            </path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="mid">
            <div className="head1">You May Also Like</div>
            <div className="popular">
              {filteredDatat3.map((product) => {
                return (
                  <>
                    <div className="card">
                      <Link to={`/PopularAPI/${product.id}`}>
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt="..."
                          id="imgcard"
                        />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text" style={{fontSize:"0.7rem"}}>pack of {product.unit}</p>
                        <p className="card-text">₹{product.price}</p>

                        <Link to="#">
                          <button className="btn btn-primary" id="atc" onClick={() => handleAddToCart(product)}>
                            Add To Cart
                          </button>
                        </Link>
                        <Link to="#">
                          <button className="btn btn-primary" id="bn">
                            Buy Now
                          </button>
                        </Link>
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
                              opacity=".9">
                            </path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

    </>
  );
};

export default Home;
