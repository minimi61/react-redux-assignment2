import styled from "styled-components";

const HeaderBox = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 7px;
  border: 0.5px solid grey;
  display: flex;
  justify-content: space-between;

  h5 {
      margin: 15px;
    }
  `

const Header = () => {
  return (
    <HeaderBox>
      <h5>
        My Todo List
      </h5>
      <h5>
        React
      </h5>
    </HeaderBox>
  )
}

export default Header;