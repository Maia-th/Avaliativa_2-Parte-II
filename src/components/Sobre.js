import React from "react";
import linguagens from "../img/React, Rest, BD.png";
import "./Sobre.css";

export default function Sobre() {
  return (
    <>
      <div className="sobre">
        <h1>Trabalho Final</h1>
        <p>
          Esta página foi criada com o objetivo de consolidar os conhecimentos
          obtidos na segunda parte da disciplina de Desenvolvimento De Sistemas
          Web além de servir como atividade avaliativa final.
        </p>
        <p>Foram usadas as seguintes habilidades para compor essa pagina:</p>
        <img src={linguagens} alt="React Rest BD" />
      </div>
    </>
  );
}
