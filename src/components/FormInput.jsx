import styled from "styled-components";
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { initialState } from '../redux/modules/todosReducer'
import { addTodo } from "../redux/modules/todosReducer";
import List from "./List";

const InputBox = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  background-color: #e3e2e2;
  display: flex;
  justify-content: space-between;

  div {
   display: flex;
   margin: auto 0;
    p {
      margin: 5px 10px;
      font-size: 15px;
      font-weight: bolder;
    }
    input {
      width: 200px;
      border-radius: 10px;
      height: 30px;
      border: none;
    }
  }
    
  button {
    width: 120px;
    height: 38px;
    border-radius: 10px;
    border: none;
    background-color: #0d7583;
    color : white;
    margin: auto 30px;
    cursor: pointer;
  }
`

const FormInput = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  // 함수형 컴포넌트에서 useDispatch 사용을 위해 선언
  const dispatch = useDispatch();


  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleBody = (e) => {
    setBody(e.target.value)
  }

  const addBtn = (e) => {
    if (title === '' && body === '')return

    let data = {
      title: title,
      body: body,
    }
    dispatch(addTodo(data))
    // dispatch(dataSave([...initialState, data]))
    setTitle('');
    setBody('');
  }


    return (
      <>
        <InputBox>
          <div>
            <p>제목</p>
            <input onChange={handleTitle} type='text' name="title" value={title}></input>
            <p>내용</p>
            <input onChange={handleBody} type='text' name="body" value={body}></input>
          </div>
          <button onClick={addBtn}>추가하기</button>
        </InputBox>
        <List/>
      </>
    )
}

export default FormInput;