import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Chefs from "./pages/chefs/Chefs";
import Recipe from "./pages/recipe/Recipe";
import Restaurants from "./pages/restaurants/Restaurants";
import FamousDish from "./pages/famous-dish/FamousDish";
import Politics from "./pages/politics/Politics";
import Conditions from "./pages/conditions/Conditions";

import './App.css';


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/famous-dish" element={<FamousDish />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/conditions" element={<Conditions />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
