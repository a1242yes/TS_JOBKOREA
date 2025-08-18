import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import HeaderBar from "./components/HeaderBar";
import IconCompany from "./assi/IconCompany";
import Keyword from "./assi/Keyword";
import Login from "./assi/login";
import HeaderList from "./assi/HeaderList";
import Card from "./assi/Card";
import Cardtest from "./assi/Cardtest";

const App = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} /> {/* 첫페이지 */}
      <Route path="/h" element={<HeaderBar />} /> {/* 헤더바 */}
      <Route path="/i" element={<IconCompany />} /> {/* 회사 그룹 */}
      <Route path="/k" element={<Keyword />} /> {/* 키워드 */}
      <Route path="/Login" element={<Login />} /> {/* 로그인, 회원가입 */}
      <Route path="/list" element={<HeaderList />} /> {/* 드롭 메뉴창 */}
      {/* <Route path="/card" element={<Card />} /> 드롭 메뉴창 */}
      <Route path="/cardt" element={<Cardtest />} /> {/* 드롭 메뉴창 */}
    </Routes>
  );
};

export default App;
