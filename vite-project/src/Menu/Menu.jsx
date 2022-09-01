import React from "react";
import { Link } from "react-router-dom";
import S from "./Menu.module.css";
const Menu = () => {
  return (
    <div>
      <nav className={S.nav}>
        <Link to={"/"}> Home </Link>
        <Link to={"/Cadastrar"}> Cadastrar </Link>
    
      </nav>
    </div>
  );
};

export default Menu;
