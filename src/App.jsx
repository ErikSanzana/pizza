import {Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PizzaDetails from "./pages/PizzaDetails";
import { CartProvider } from './context/CartContext'; 



const App = () => {
  return (
    <CartProvider>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* funciona */}
        <Route path="*" element={<NotFound />} />
        {/* funciona */}
        <Route path="/carrito" element={<Cart/>} />
        {/* funciona */}
        <Route path="/pizza/:id" element={<PizzaDetails />} />
        {/* test */}
      </Routes>
      </div>
      </CartProvider>
  );
};

export default App;
