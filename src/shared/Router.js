import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../components/DetailPage";
import Layout from '../components/Layout'

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout/>} />
        <Route path="/DetailPage/:id" element={< DetailPage/> } />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;