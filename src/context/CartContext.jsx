import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Comprobar si la pizza ya está en el carrito
      const existingPizza = state.cart.find((pizza) => pizza.name === action.pizza.name);

      if (existingPizza) {
        // Si la pizza ya está en el carrito, incrementa la cantidad
        const updatedCart = state.cart.map((pizza) =>
          pizza.name === action.pizza.name
            ? { ...pizza, quantity: pizza.quantity + 1 }
            : pizza
        );
        return { ...state, cart: updatedCart };
      } else {
        // Si la pizza no está en el carrito, agrégala con cantidad 1
        const addedCart = [...state.cart, { ...action.pizza, quantity: 1 }];
        return { ...state, cart: addedCart };
      }

    case 'REMOVE_FROM_CART':
      const nameToRemove = action.pizza.name;
      const removedCart = state.cart.filter((pizza) => pizza.name !== nameToRemove);
      return { ...state, cart: removedCart };

    case 'INCREASE_QUANTITY':
      const increasedCart = state.cart.map((pizza) =>
        pizza.name === action.pizza.name
          ? { ...pizza, quantity: pizza.quantity + 1 }
          : pizza
      );
      return { ...state, cart: increasedCart };

    case 'DECREASE_QUANTITY':
      const decreasedCart = state.cart.map((pizza) =>
        pizza.name === action.pizza.name && pizza.quantity > 1
          ? { ...pizza, quantity: pizza.quantity - 1 }
          : pizza
      );
      return { ...state, cart: decreasedCart };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
