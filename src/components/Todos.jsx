import React from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';


const TodoBox = styled.div`
  width: 300px;
  height: 180px;
  border: 5px solid #0f6867;
  border-radius: 8px;

  div {
    margin-left: 10px;

    h2 {
      margin-top: 10px;
    }
    div {
      margin-left: -20px;
      display: flex;
      justify-content: space-between;
      
      button {
        width: 130px;
        height: 40px;
        border-radius: 7px;
        background-color: white;
        border: 3px solid ${(props) => props.bordercolor};
        cursor: pointer;
      }
    }
  }
`

const Todos = () => {
  const dispatch = useDispatch(); // dispatch 생성

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
        {/* <h2>{title}</h2> */}
        <h3>asdfasdf</h3>
        <div>
          <button bordercolor="red" onClick={deleteBtn}>삭제하기</button>
          <button bordercolor="green" onClick={doneBtn}>완료</button>
        </div>
      </div>
     </TodoBox>
  )
}

export default Todos;