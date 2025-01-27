import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slide from "./pages/Slide";
import Animation from "./pages/Animation";
import ListOfItems from "./pages/ListOfItems";
import CurrentDate from "./components/CurrentDate";
import Colour from "./components/propsTesting/Colour";
import UserCard from "./components/propsTesting/UserCard";
import ProductCard from "./components/propsTesting/ProductCard";
import Counter from "./components/stateTesting/Counter";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";



const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route path="/slide" element={<Slide />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/listofitems" element={<ListOfItems />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
      <div className="container">
        <CurrentDate />
        <div>
          <Colour colour="blue" />
          <UserCard name="John" age="25" location="Glasgow" />
          <UserCard name="Jane" age="30" location="Edinburgh" />
        </div>
        <div>
          <ProductCard name="Laptop" price="£500" description="A laptop" />
          <ProductCard name="Phone" price="£200" description="A phone" />
        </div>
        <Counter />
      </div>
    </>
  );
};

export default App;
