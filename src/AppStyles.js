import styled from "styled-components";

export const NavBar = styled.div`
  padding: 20px 50px;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MainContainer = styled.div`
  position: relative;
`;

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 500;
`;

export const ProductList = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  height: 75px;
  line-height: 75px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;

export const NavLeft = styled.nav`
  padding: 0;
  margin: 0;
  display: flex;
  position: absolute;
  left: 40px;
`;

export const NavCenter = styled.nav`  
  margin: 0;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  left: 400px;
  top: 40px;
  color: #000; 
  text-decoration: none;
  padding: 0 1rem;  
  cursor: pointer;
  
  
  
`;

export const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-size: 1rem;  
`;

