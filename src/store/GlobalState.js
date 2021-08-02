import React, { useReducer } from "react";

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from "./types";
import Context from "./Context";
import Reducer from "./Reducer";

export default function GlobalState(props) {
  const products = [
    {
      
      id: 100,
      title: "Notebook Samsung, Intel® Core™ i7, 16GB, 256GB SSD, Tela de 15”, Style S51 Pro - NP900X5T-XW1BR - SGNP900X5TXW1_PRD",

      imageURL:
        "https://m.media-amazon.com/images/I/51S6IQ2lGwL._AC_UY327_FMwebp_QL65_.jpg",
      price: 49.5,
    },
    {
      id: 101,
      title: "Notebook Gamer Acer, Intel Core i7, 16GB, 1TB, Tela de 15.6”, NVIDIA GeForce GTX 1050 Ti - pire Nitro 5 AN515-51-78D6 - 49953_PRD",
      imageURL:
        "https://m.media-amazon.com/images/I/61HEqHMkRhL._AC_UL480_FMwebp_QL65_.jpg",
      price: 149.0,
    },
    {
      id: 102,
      title: "Impressora Multifuncional Canon Tanque de Tinta com USB e Wi-Fi - G3111 - N52315C021PTO_PRD",
      imageURL:
        "https://m.media-amazon.com/images/I/71k--F6wVGL._AC_UL480_FMwebp_QL65_.jpg",
      price: 34.5,
    },
    {
      id: 103,
      title: "Notebook Samsung, Processador Intel® Core™ i7, 8GB, 256GB SSD, Tela de 13,3”, Style S51 Pen - NP930QAA-KW1BR - SGNP930QAAKW1_PRD",
      imageURL:
        "https://m.media-amazon.com/images/I/71k--F6wVGL._AC_UL480_FMwebp_QL65_.jpg",
      price: 34.5,
    },
  ];

  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  // # add product to cart
  const addProductToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  // # remove product from cart
  const removeProductFromCart = (productID) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productID,
    });
  };

  // # clear all product from cart
  const clearCart = () => {
    dispatch({
      type: CLEAR_ALL_FROM_CART,
    });
  };

  return (
    <Context.Provider
      value={{
        products: products,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
