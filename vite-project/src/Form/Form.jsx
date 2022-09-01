import React from "react";
import Button from "../Button/Button";

const Form = ({ valor, handleChange, handleClick }) => {
  return (
    <form>
      <label>Nome</label>
      <input
        type="text"
        value={valor.nome}
        name="nome"
        onChange={(e) => handleChange(e, "nome")}
      />
      <label>Sobrenome</label>
      <input
        type="text"
        value={valor.sobrenome}
        name="sobrenome"
        onChange={(e) => handleChange(e, "sobrenome")}
      />
      <label>Email</label>
      <input
        type="email"
        value={valor.email}
        name="email"
        onChange={(e) => handleChange(e, "email")}
      />
      <label>Telefone</label>
      <input
        type="telefone"
        value={valor.tel}
        name="telefone"
        onChange={(e) => handleChange(e, "telefone")}
      />
      <Button handleClick={handleClick} texto="Próximo" />
    </form>
  );
};

export default Form;
