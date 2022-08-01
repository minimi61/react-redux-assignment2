import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import dataSave from "../redux/modules/todosReducer";
import todosReducer from "../redux/modules/todosReducer";


const TodoBox = styled.div`
  width: 300px;
  height: 180px;
  border: 5px solid #0f6867;
  border-radius: 8px;
  margin-right: 10px;

  div {
    margin-left: 10px;
    h2 {
      margin-top: 10px;
    }
    div {
      margin-left: -20px;
      display: flex;
      justify-content: space-between;
      
      /* button {
        width: 130px;
        height: 40px;
        border-radius: 7px;
        background-color: white;
        border: 3px solid ${(props) => props.bordercolor};
        color: ${(props) => props.ABC};
        cursor: pointer;
        margin-right: 5px;
      } */
    }
  }
`
const TodoBtnColor = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 7px;
  background-color: white;
  border: 3px solid ${(props) => props.bordercolor};
  cursor: pointer;
  margin-right: 5px;
`

const Todos = ({title,body}) => {
  const dispatch = useDispatch(); // dispatch 생성
  
  // const title = useSelector(state => state.todosReducer.map(todo => todo.title))
  // console.log(title)
  // const title = data => dispatch(dataSave(data))
  // console.log(title)

  
  const deleteBtn = () => {
    console.log('삭제')
    dispatch({type: 'DELETE_BTN'})
  }
  const doneBtn = () => {
    console.log('완료')
  }
  return (
    <TodoBox>
      <div>
        <h2>{title}</h2>
        <h3>{body}</h3>
        <div>
          <TodoBtnColor bordercolor="red" onClick={deleteBtn}>삭제하기</TodoBtnColor>
          <TodoBtnColor bordercolor="green" onClick={doneBtn}>완료</TodoBtnColor>
        </div>
      </div>
     </TodoBox>
  )
}


export default Todos;