import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import DetailPage from "./DetailPage";

const TodoBox = styled.div`
  width: 300px;
  height: 230px;
  border: 5px solid #0f6867;
  border-radius: 8px;
  margin-right: 10px;
  margin-top: 10px;

  div {
    margin-left: 10px;
    h2 {
      margin-top: 10px;
    }
    div {
      margin-left: -20px;
      display: flex;
      /* justify-content: space-between; */
      
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
  
  &:hover {
    background-color: ${(props) => props.bordercolor};
    color: white
  }
`
const DetailPageBtn = styled.button`
  width: 270px;
  height: 40px;
  border-radius: 7px;
  background-color: white;
  border: 3px solid skyblue;
  cursor: pointer;
  margin-left: -10px;
  &:hover {
    background-color: skyblue;
    color: white
  }
`

const Todos = ({ title, body, id, isDone }) => {
  const dispatch = useDispatch(); // dispatch 생성
  const deleteTodo = () => {
    dispatch({type: 'DELETE_TODO', id})
  }
  const toggleTodo = () => {
    console.log(isDone)
    dispatch({type: 'TOGGLE_TODO', id, isDone})
    // dispatch(toggleTodo(isDone)) AAA
  }
  const DetailPage = () => {
    console.log('디테일');

    <Route path="/detail" component={DetailPage} />
  } 

  return (
    <TodoBox>
      <div>
        <h2>{title}</h2>
        <h3>{body}</h3>
        <div>
          <TodoBtnColor bordercolor="lightcoral" onClick={deleteTodo}>삭제하기</TodoBtnColor>
          <TodoBtnColor bordercolor="lightgreen" onClick={toggleTodo}>{isDone ? '취소' :'완료'}</TodoBtnColor>
        </div>  
          <DetailPageBtn onClick={DetailPage}>자세히 보기</DetailPageBtn>
        
      </div>
     </TodoBox>
  )
}


export default Todos;