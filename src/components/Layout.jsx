import React from "react";
import styled from "styled-components";
import FormInput from './FormInput'
import Header from './Header'

const LayoutBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  margin: 0 auto;
  `

const Layout = () => {
  return (
    <LayoutBox>
      <Header />
      <FormInput />
    </LayoutBox>
  )
}

export default Layout;