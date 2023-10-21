import React from 'react';
import PizzaList from '../components/PizzaList';
import Banner from '../components/Banner';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { dispatch } = useCart();
  /* puro contexto */

  return (
    <div className="PizzaCard">
      <Banner />

      <div>
        {/* Renderiza la lista de pizzas y proporciona la funcionalidad para agregar al carrito */}
        <PizzaList addToCart={dispatch} /> {/* Pasa la función addToCart como prop */}
      </div>
    </div>
  );
};

export default Home;
