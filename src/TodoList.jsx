import React, { useState, useEffect } from "react";
import Icone from "./assets/note.png";

function TodoList() {
  const listaStorage = localStorage.getItem("Lista");

  const [lista, setLista] = useState(
    listaStorage ? JSON.parse(listaStorage) : []
  );
  const [novoItem, setNovoItem] = useState("");

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  function adicionaItem(form) {
    form.preventDefault();
    if (!novoItem) {
      return;
    }
    setLista([...lista, { text: novoItem, isCompleted: false }]);
    setNovoItem("");
    document.getElementById("inputEntrada").focus();
  }

  function clicou(index) {
    const listaAux = [...lista];
    listaAux[index].isCompleted = !listaAux[index].isCompleted;
    setLista(listaAux);
  }

  function deleta(index) {
    const listaAux = [...lista];
    listaAux.splice(index, 1);
    setLista(listaAux);
  }

  function deletaTudo() {
    setLista([]);
  }

  return (
    <div className="bg-neutral-50 flex flex-col items-center w-screen h-screen">
      <div className="w-full flex flex-row justify-center bg-azulEscuro shadow-md">
        <h1 className="text-white text-3xl font-lora mt-8 mb-4">
          Lista de Tarefas
        </h1>
      </div>

      <div className="flex items-end justify-center w-full">
        <form
          onSubmit={adicionaItem}
          className="flex w-full justify-center m-4"
        >
          <input
            id="inputEntrada"
            className="input input-bordered rounded-e-sm input-info bg-black text-white w-full xl:w-3/4 sm:w-3/4 mt-2 ml-2"
            type="text"
            value={novoItem}
            onChange={(e) => {
              setNovoItem(e.target.value);
            }}
            placeholder="Adicione uma tarefa"
          />
          <button
            className="btn rounded-s-sm bg-error text-black hover:bg-azulEscuro mt-2 mr-2"
            type="submit"
          >
            Adicione
          </button>
        </form>
      </div>

      <div id="listaTarefas" className="flex flex-col items-center m-4">
        <div className="flex flex-col xl:w-3/4 sm:w-3/4 items-center ">
          {lista.length < 1 ? (
            <img className="flex sm:w-1/2 md:w-1/3 xl:w-1/2" src={Icone} />
          ) : (
            lista.map((item, index) => (
              //LISTA PREENCHIDAS
              <div
                key={index}
                id={item.isCompleted ? "item completo" : "item"}
                className="flex flex-col items-center lg:flex-row bg-white rounded hover:bg-azulMedio shadow-xl mt-4 p-5"
              >
                <span
                  onClick={() => {
                    clicou(index);
                  }}
                  className="flex-wrap overflow-hidden text-lg lg:text-2xl text-black lg:mr-4"
                >
                  {item.text}
                </span>
                <button
                  onClick={() => {
                    deleta(index);
                  }}
                  id="del"
                  className="btn btn-outline btn-error mt-4"
                >
                  Deletar
                </button>
              </div>
            ))
          )}
          {lista.length > 0 && (
            <button
              onClick={() => {
                deletaTudo();
              }}
              id="deleteAll"
              className="btn border-error bg-black hover:bg-error text-error hover:text-white m-8"
            >
              Deletar Todas
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
