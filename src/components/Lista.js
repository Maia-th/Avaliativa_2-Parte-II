import React, { useEffect, useState } from "react";
import axios from "axios";
import ListaTabela from "./Listatable";

export default function Lista() {
  const [lista, setLista] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [tipo, setTipo] = useState("");

  const url = "http://localhost:8081/";

  useEffect(() => {
    fetch(url + "Lista")
      .then((response) => response.json())
      .then((data) => setLista(data))
      .catch((err) => console.log(err));
  }, [url]);

  function novo() {
    setTipo("novo");
  }

  function cancelar() {
    setId("");
    setNome("");
    setNumero("");
    setTipo("");
  }

  function editar(cod) {
    let li;
    li = lista.find((item) => item.id === cod);
    const { id, nome, numero } = li;
    setTipo("editar");
    setId(id);
    setNome(nome);
    setNumero(numero);
  }

  function excluir(cod) {
    axios.delete(url + "Lista/" + cod);
  }

  function atualizar() {
    setTipo("");
  }

  function gravar() {
    if (nome !== "" && numero !== "") {
      if (tipo === "novo") {
        axios
          .post(url + "Lista", {
            nome: nome,
            numero: numero,
          })
          .then((response) => atualizar(response))
          .catch((err) => console.log(err));
      } else if (tipo === "editar") {
        axios
          .put(url + "Lista/" + id, {
            id: id,
            nome: nome,
            numero: numero,
          })
          .then((response) => atualizar(response))
          .catch((err) => console.log(err));
      }
    } else {
      console.log("Preencha os campos");
    }
  }

  return (
    <div>
      {lista ? (
        <ListaTabela dados={lista} Editar={editar} Excluir={excluir} />
      ) : (
        false
      )}
      <div className="inputs">
        <button type="button" onClick={novo}>
        Criar Novo Contato
      </button>
      {tipo ? (
        <>
          <input
            type="text"
            name="txtNome"
            value={nome}
            placeholder= "Nome"
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <input
            type="text"
            name="txtnumero"
            value={numero}
            placeholder= "Número"
            onChange={(e) => {
              setNumero(e.target.value);
            }}
          />
          <button type="button" onClick={cancelar}>
            Cancelar
          </button>
          <button type="button" onClick={gravar}>
            Gravar
          </button>
        </>
      ) : (
        false
      )}
      </div>
    </div>
  );
}
