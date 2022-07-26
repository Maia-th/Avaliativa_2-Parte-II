import React from "react";
import imgEdit from "../img/edit.ico";
import imgDelet from "../img/delete.ico";
import './Style.css';

export default function ListaTabela(props) {
  return (
    <div>
      <table>
      <tbody>
        {props.dados.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.numero}</td>
               <td>
                <div className="img">
                  <img
                  alt="Editar"
                  src={imgEdit}
                  id={item.id}
                  height={20}
                  width={20}
                  onClick={(e) => props.Editar(item.id)}
                />
                {" "}
                <img
                  alt="excluir"
                  src={imgDelet}
                  id={item.id}
                  height={20}
                  width={20}
                  onClick={(e) => props.Excluir(item.id)}
                />
                </div>
                
                </td>
                </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}
