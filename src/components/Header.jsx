import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { getItem } from "../services/LocalStorageFuncs"
// import { Header } from "../css/Header"

export const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: crimson;
  padding: 20px;

  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    text-decoration: underline;
  }
`

export const Header = () => {
  // const user = getItem("usuario")
  // const name = user.name.split(" ")

  return (
    <HeaderArea>
      <Link to="/">Store</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/profile">Meu Perfil</Link>
    </HeaderArea>
  )
}

export default Header
