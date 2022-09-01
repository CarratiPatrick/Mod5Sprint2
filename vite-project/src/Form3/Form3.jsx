import React from "react";

const Form3 = ({valor, handleChange, handleClick}) => {
  return (
    <form>
      <label>Data de Nascimento</label>
      <input
        type="date"
        value={valor.date}
        name="date"
        onChange={(e)=>handleChange(e,"date")}
      />
      <label>CPF</label>
      <input
        type="text"
        value={valor.cpf}
        name="cpf"
        onChange={(e)=>handleChange(e,"cpf")}
      />
      <label>Renda</label>
      <input
        type="text"
        value={valor.renda}
        name="renda"
        onChange={(e)=>handleChange(e,"renda" )}
      />
      
      <Button handleClick={handleClick} texto="Salvar" />
    </form>
  );
};

export default Form3;
