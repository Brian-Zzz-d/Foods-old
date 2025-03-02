import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Chefs from "./pages/chefs/Chefs";
import Recipe from "./pages/recipe/Recipe";
import Restaurants from "./pages/restaurants/Restaurants";
import FamousDish from "./pages/famous-dish/FamousDish";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/famous-dish" element={<FamousDish />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
