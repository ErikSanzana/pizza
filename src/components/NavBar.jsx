import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from '../context/CartContext'; // Importa el contexto

const Navbar = () => {
  const { state } = useCart();

  // Calcula el monto total
  const totalAmount = state.cart.reduce((total, pizza) => total + pizza.price, 0);

  return (
    <nav>
      <NavLink to="/">Pizzeria Mamma Mia!</NavLink>
      <NavLink to="/carrito">
      🍕Carrito <span>{`$${totalAmount.toFixed(2)}`}</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;

/* barra de navegacion falta carrito clikeable , montos etc */
