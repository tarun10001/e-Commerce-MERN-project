import "./App.css";
import { Container } from "react-bootstrap";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Route, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import Thankyou from "./screens/Thankyou";


function App() {

  return (
    <div>
      <Header />
      <Container>
        <main className="py-3">
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/login/shipping" element={<ShippingScreen />}></Route>
            <Route path="/payment" element={<PaymentScreen />}></Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
            <Route path="/thankyou" element={<Thankyou />}></Route>

            {/* <Route path="/cart/:id" element={<CartScreen />}></Route> */}
          </Routes>
        </main>
      </Container>

      <Footer />
    </div>
  );
}


export default App;