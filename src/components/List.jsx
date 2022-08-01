import styled from "styled-components";
import Todos from './Todos'
import { useDispatch, useSelector } from 'react-redux';
import dataSave from "../redux/modules/todosReducer";
import todosReducer from "../redux/modules/todosReducer";

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

const TodosBox = styled.div`
  display: flex;
  /* margin-right: 0px; */
`

const List = () => {
  const dispatch = useDispatch(); // dispatch 생성
  const states = useSelector((state) => state.todosReducer)
  // console.log(states)
  const isDoneFalse = states.filter(state => !state.isDone)
  const isDoneTrue = states.filter(state => state.isDone)

  
  console.log(isDoneFalse);
  return (
    <ListContainer>
      <div>
        <p>
          Working... 🔥
        </p>
        <TodosBox>
          {isDoneFalse.map((state) => {
            console.log(state)
            return (
              <Todos title={state.title} body={state.body} />
          )
                })}
        </TodosBox>
      </div>

      <div>
        <p>
        Done ..! 🎉
        </p>
        <div>
          {isDoneTrue.map((state) => {
            console.log(state)
            return (
              <Todos title={state.title} body={state.body} />
          )
                })}
        </div>
      </div>

    </ListContainer>
  )
}

export default List;