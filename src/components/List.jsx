import styled from "styled-components";
import Todos from './Todos'
import { useSelector } from 'react-redux';

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
  flex-wrap: wrap;
`

const List = () => {
  // const dispatch = useDispatch(); // dispatch 생성
  const states = useSelector((state) => state.todosReducer)

  const isDoneFalse = states.filter(state => !state.isDone)
  const isDoneTrue = states.filter(state => state.isDone)

  
  return (
    <ListContainer>
      <div>
        <p>
          Working... 🔥
        </p>
        <TodosBox>
          {isDoneFalse.map((state) => {
            return (
              <Todos title={state.title} body={state.body} key={state.id} id={state.id} isDone={state.isDone} />
          )
                })}
        </TodosBox>
      </div>

      <div>
        <p>
        Done ..! 🎉
        </p>
        <div>
        <TodosBox>
          {isDoneTrue.map((state) => {
            return (
              <Todos title={state.title} body={state.body} key={state.id} id={state.id} isDone={state.isDone}/>
          )
          })}
          </TodosBox>
        </div>
      </div>

    </ListContainer>
  )
}

export default List;