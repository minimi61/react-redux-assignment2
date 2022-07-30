import styled from "styled-components";

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
    return (
      <InputBox>
        <div>
          <p>제목</p>
          <input></input>
          <p>내용</p>
          <input></input>
        </div>
        <button>추가하기</button>
      </InputBox>
    )
}

export default FormInput;