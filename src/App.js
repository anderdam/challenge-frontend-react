import React, { useState, useContext, useEffect } from "react";

import GlobalStyles from "./GlobalStyles";
import { NavBar, NavLeft, NavCenter, NavLink, OverLay, MainContainer, ProductList } from "./AppStyles";

import Context from "./store/Context";
import Cart from "./components/Cart";
import Product from "./components/Product";

import logo from './components/Imgs/agencia-eplus-n-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

export default function App() {
  const [isToggle, setToggle] = useState(false);
  const context = useContext(Context);

  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <>
      <GlobalStyles />
      <NavBar>
        <NavLeft>
          <img src={logo} alt="logo"></img>
        </NavLeft>
        <NavCenter>
          <NavLink href='/www'>Lorem ipsum</NavLink>
          <NavLink href='/www'>Lorem ipsum</NavLink>
          <NavLink href='/www'>Lorem ipsum</NavLink>
          <NavLink href='/www'>Lorem ipsum</NavLink>
          <NavLink href='/www'>Lorem ipsum</NavLink>
          <NavLink href='/www'>
            <SearchIcon />
          </NavLink>
          <NavLink href='/www'>
            <PersonIcon />
          </NavLink>
          <Cart
          isToggle={isToggle}
          setToggle={setToggle}
          carts={context.carts}
          removeProductFromCart={context.removeProductFromCart}
          clearCart={context.clearCart}
        />
        </NavCenter>        
      </NavBar>

      <MainContainer>
        {isToggle && <OverLay />}
        <ProductList>
          {context.products.map((p) => (
            <Product
              key={p.id}
              id={p.id}
              imageURL={p.imageURL}
              price={p.price}
              title={p.title}
              addProductToCart={context.addProductToCart}
            />
          ))}
        </ProductList>
      </MainContainer>
    </>
  );
}
