import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Heading from "./Component/Heading";
import List from "./Component/Post/List";
import Upload from "./Component/Post/Upload";
import Detail from "./Component/Post/Detail";
import Edit from "./Component/Post/Edit";

function App() {
  //1. 가정문 : if else, switch
  //2. 반복문 : for // map 쓸떈 div에 키값 주자

  return (
    <div className="App">
      <Heading />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/post/:postNum" element={<Detail />} />
        <Route path="/edit/:postNum" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
