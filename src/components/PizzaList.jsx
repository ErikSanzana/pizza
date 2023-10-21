import React from 'react';
import { useCart } from '../context/CartContext';
import pizzasData from '../assets/pizzas.json';
import PizzaCard from './PizzaCard';

function PizzaList() {
  const { dispatch } = useCart();

  const handleAddToCart = (pizza) => {
    dispatch({ type: 'ADD_TO_CART', pizza });
  };

  
  try {
    
    const pizzas = pizzasData;
    
    return (
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-2" key={pizza.id}>
            <PizzaCard pizza={pizza} showDescription={false} />
            <button onClick={() => handleAddToCart(pizza)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error al leer el archivo JSON:', error);
    return (
      <div className="error-message">
        Ha ocurrido un error al cargar los datos. Por favor, intenta de nuevo más tarde.
      </div>
    );
  }
}

export default PizzaList;



/* extrae json y ordena por idpizza */
