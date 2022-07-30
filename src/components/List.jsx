import styled from "styled-components";
import Todos from './Todos'

const ListContainer = styled.div`
  width: 100%;

  div {
    padding: 10px;
    p {
      font-size: 20px;
      font-weight: 600;
    }
  }
`

const List = () => {
  return (
    <ListContainer>
      <div>
        <p>
          Working... 🔥
        </p>
        <Todos/>
      </div>

      <div>
        <p>
        Done ..! 🎉
        </p>
        <Todos/>
      </div>

    </ListContainer>
  )
}

export default List;