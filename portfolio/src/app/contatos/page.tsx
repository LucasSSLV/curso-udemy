"use client";
import BotaoVoltar from "@/components/ButtonBack";
import Title from "@/components/Title";
import React, { useState } from "react";
import "../../styles/faleComigo.css";

const ContatoForm: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicione aqui a lógica para lidar com o envio do formulário (ex: chamada API)
    console.log("Formulário enviado:", { nome, email, mensagem });
  };

  return (
    <div className="div-geral">
    <div>
      <Title name={`Vamos trocar um ideia?`} />
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mensagem:
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <BotaoVoltar />
    </div>
  );
};

export default ContatoForm;
