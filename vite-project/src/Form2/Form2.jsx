import React from "react";
import Button from "../Button/Button";

const Form2 = ({ valor, handleChange, handleClick }) => {
  return (
    <form>
      <label>CEP</label>
      <input
        type="text"
        value={valor.cep}
        name="cep"
        onChange={(e) => handleChange(e, "cep")}
      />
      <label>Endereço</label>
      <input
        type="text"
        value={valor.endereco}
        name="endereco1"
        onChange={(e) => handleChange(e, "endereco")}
      />
      <label>Complemento</label>
      <input
        type="text"
        value={valor.complemento}
        name="complemento"
        onChange={(e) => handleChange(e, "complemento")}
      />
      <Button handleClick={handleClick} texto="Próximo" />
    </form>
  );
};

export default Form2;
