import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const DetailBox = styled.div`
  width: 50%;
  height: 50vh;
  margin: 0  auto;
  margin-top: 100px;
  border-radius: 10px;
  background-color: #8ba9b6;
`
const DetailCONTATNER = styled.div`
  padding: 30px;
  text-align: center;
  justify-content: center;
`
const DetailContent = styled.div`
  width: 70%;
  height: 160px;
  background-color: #f7f7f7;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 10px;
  padding-top: 6rem;
  font-size: 24px;
`
const BACKBTN = styled.div`
  width: 120px;
  height: 30px;
  background-color: #5c5d6d;
  padding: 1rem;
  font-size: 18px;
  font-weight: bolder;
  color: wheat;
  border-radius: 20px;
  margin: 30px auto;
  cursor: pointer;

  &:hover {
    background-color: wheat;
    color: #5c5d6d;
  }
`

const DetailPage = () => {
  const navigate = useNavigate();
  //뒤로가기 버튼
  const BackToHome = () => {
    navigate(-1);
  }

  const param = useParams();
  // console.log(param)

  const states = useSelector((state) => state.todosReducer)
  const sameIdContents = [...states].find(state => {
    return state.id ===Number(param.id)
  })
  console.log(sameIdContents)
   

  return (
    <DetailBox>
      <DetailCONTATNER>
        <h1>{sameIdContents.title}</h1>
        <DetailContent>{sameIdContents.body }</DetailContent>
        <BACKBTN onClick={BackToHome}><FontAwesomeIcon icon={faRotateLeft}/></BACKBTN>
      </DetailCONTATNER>
    </DetailBox>
  );
};

export default DetailPage;
