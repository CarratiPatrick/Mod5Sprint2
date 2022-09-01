import React from "react";
import S from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Cadastrar from "./pages/Cadastro/Cadastrar";

function App() {
  return (
    <BrowserRouter>
      <div className={S.div}>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar" element={<Cadastrar />} />      
        </Routes>
      </div>      
    </BrowserRouter>
  );
}

export default App;