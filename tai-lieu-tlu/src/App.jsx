import "antd/dist/reset.css"; // or "antd/dist/antd.min.css" for old versions
import Main from './Components/Main';
import Main2 from "./Components/Main2";
import React from 'react';
import TrangChu from "./Components/HomePage";
import { Routes, Route, Link} from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<TrangChu/>}/>
      <Route path="Tai-lieu" element={<Main/>}/>
      <Route path="Tai-lieu2" element={<Main2/>}/>
    </Routes>
    </>
  )
}

export default App
