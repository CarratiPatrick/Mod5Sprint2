import React from "react";

const Form2 = () => {
  return (
    <div>
      <form>
        <label htmlFor="CEP">CEP:</label>
        <input type="text" name="CEP"></input>
        <label htmlFor="endereco">Endereço:</label>
        <input type="text" name="endereco"></input>
        <label htmlFor="complemento">Complemento:</label>
        <input type="text" name="complemento"></input>        
      </form>
    </div>
  );
};

export default Form2;
