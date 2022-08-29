import React from "react";

const Form3 = () => {
  return (
    <div>
      <form>
        <label htmlFor="data">Data de Nascimento:</label>
        <input type="date" name="data"></input>
        <label htmlFor="cpf">CPF:</label>
        <input type="text" name="cpf"></input>
        <label htmlFor="renda">Renda Mensal:</label>
        <input type="number" name="renda" step="R$ 0.000"></input>
      </form>
    </div>
  );
};

export default Form3;
