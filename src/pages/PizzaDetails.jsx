import React from 'react';
import { useParams } from 'react-router-dom';
import pizzasData from '../assets/pizzas.json';
/* importe el json  */

const PizzaDetails = () => {
  const { id } = useParams();

  // Utiliza el método .find() para buscar la pizza por su ID
  const pizza = pizzasData.find((pizza) => pizza.id === id);

  if (!pizza) {
    return <p>Pizza no encontrada</p>;
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>{pizza.name}</h2>
          <img src={pizza.img} alt={pizza.name} style={{ maxWidth: '150px', maxHeight: '150px' }} />
          {/* mala praxis  */}
          <p>{pizza.desc}</p>
          <p>Ingredients:</p>
          <ul>
            {pizza.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p>Price: ${pizza.price}</p>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
