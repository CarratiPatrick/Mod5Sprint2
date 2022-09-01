import React from "react";
import { useState } from "react";
import Form from "../../Form/Form";
import Form2 from "../../Form2/Form2";
import Form3 from "../../Form3/Form3";

const Cadastrar = () => {
  const [valor, setValor] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cep: "",
    endereco: "",
    complemento: "",
    date: "",
    cpf: "",
    renda: "",
  });
  const [dados, setDados] = useState({});
  const [lista, setLista] = useState([])

  const handleChange = (e) => {
    const value = e.target.value;
    setValor({ ...valor, [e.target.name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setDados({...dados, valor});
  };
  
  const handleClickSave = (e)=>{
    e.preventDefault()
    setDados({...dados, valor})
    setLista([...lista, infos]);
  }

  return (
    <>
      <Form
        valor={valor}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <Form2
        valor={valor}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <Form3
        valor={valor}
        handleChange={handleChange}
        handleClick={handleClickSave}
      />

    </>
  );
};

export default Cadastrar;
