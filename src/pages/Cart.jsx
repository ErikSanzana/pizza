import React from 'react';
import { useCart } from '../context/CartContext';
import {Button } from "react-bootstrap";

const Cart = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (pizza) => {
    dispatch({ type: 'REMOVE_FROM_CART', pizza });
  };

  const increaseQuantity = (pizza) => {
    dispatch({ type: 'INCREASE_QUANTITY', pizza });
  };

  const decreaseQuantity = (pizza) => {
    dispatch({ type: 'DECREASE_QUANTITY', pizza });
  };

  const calculateTotal = () => {
    return state.cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>Carrito de Compra</h2>
          <ul>
            {state.cart.map((pizza) => (
              <li key={pizza.id}>
                <div className="cart-item">
                <img src={pizza.img} alt={pizza.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                {/* mala practica lo siento estoy contra el tiempo */}
                  <div>
                    {pizza.name} - ${pizza.price} x {pizza.quantity}
                    <button onClick={() => removeFromCart(pizza)}>Eliminar</button>
                    <button onClick={() => increaseQuantity(pizza)}>+</button>
                    <button onClick={() => decreaseQuantity(pizza)}>-</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal().toFixed(2)}</p>
          <Button variant="info" className="mr-2">ir a pagar</Button>
        </div>

      </div>
    </div>
  );
};

export default Cart;



/* aca deberia ser el unitario de cada pizza donde nos llevara a detalles avanzados*/