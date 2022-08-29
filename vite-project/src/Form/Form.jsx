import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome"></input>
        <label htmlFor="sobrenome">Sobrenome:</label>
        <input type="text" name="sobrenome"></input>
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email"></input>
        <label htmlFor="telefone">Telefone:</label>
        <input type="telefone" name="telefone"></input>
      </form>
    </div>
  );
};

export default Form;
