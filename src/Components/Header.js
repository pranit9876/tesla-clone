import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Container>
      <a>
        <img src='./images/logo.svg' />
      </a>
      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </Menu>

      <RightMenu>
      <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <a href='#'>Model Y</a>
      </RightMenu>
    </Container>

  )
}
export default Header

const Container = styled.div` 
  width:100vw;
  min-height: 60px;
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0 20px;
`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
a{
  font-weigth: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}

`
const RightMenu = styled.div`
a{
  font-weigth: 600;
  font-size: 10px;
  text-transform: uppercase;
  margin-right: 10px;
}
`