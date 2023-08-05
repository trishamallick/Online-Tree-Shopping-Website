import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./RootPages/Home";
import About from "./RootPages/About";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Succulentp from "./RootPages/NeestedPages/Succulentp";
import Bonsaip from "./RootPages/NeestedPages/Bonsaip";
import Floweringp from "./RootPages/NeestedPages/Floweringp";
import Creepersp from "./RootPages/NeestedPages/Creepersp";
import Bamboop from "./RootPages/NeestedPages/Bamboop";
import SignUp from "./RootPages/SignUp";
import ContactUs from "./RootPages/ContactUs";
import Pots from "./RootPages/drop/Pots";
import Annual from "./RootPages/drop/Annual";
import Biennial from "./RootPages/drop/Biennial";
import Perennial from "./RootPages/drop/Perennials";
import AddToCart from "./RootPages/AddToCart";
import Wishlist from "./RootPages/Wishlist";
import Login from "./RootPages/Login";
import ForgotPass from "./RootPages/ForgotPass";
import CartProvider from "./RootPages/CartProvider";
import ProductDetails from "./ProductDetails";
import ProtectPath from "./ProtectPath";


const AuthRoute = () => {
  return (
    <Router>
      <>
        <NavBar />
        <CartProvider >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Succulentp" element={<Succulentp />} />
            <Route path="/Bonsaip" element={<Bonsaip />} />
            <Route path="/Floweringp" element={<Floweringp />} />
            <Route path="/Creepersp" element={<Creepersp />} />
            <Route path="/Bamboop" element={<Bamboop />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Pots" element={<Pots />} />
            <Route path="/Annual" element={<Annual />} />
            <Route path="/Biennial" element={<Biennial />} />
            <Route path="/Perennial" element={<Perennial />} />
            <Route path="/add-to-cart" element={<ProtectPath component={AddToCart}/>}/>
            <Route path="/wishlist" element={<ProtectPath component={Wishlist}/>}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/ForgotPass" element={<ForgotPass />} />
            <Route exact path="/product/:id" element={<ProductDetails />} />
            {/* <Route path="/" element={<Error />} /> */}

          </Routes>
        </CartProvider>
        <Footer />
      </>
    </Router>
  );
};

export default AuthRoute;
