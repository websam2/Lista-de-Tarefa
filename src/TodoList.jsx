import React, { useState } from "react";
import Icone from "./assets/Lista.png";

function TodoList() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState([]);

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

  return (
    <div className="bg-black flex flex-col items-center w-screen h-screen">
      <h1 className="text-azulMedio text-4xl font-lora mt-8 mb-8">
        Lista de Tarefas
      </h1>
      <div className="flex items-end justify-center w-full">
        <form
          onSubmit={adicionaItem}
          className="flex w-full justify-center m-4"
        >
          <input
            id="inputEntrada"
            className="input input-bordered input-accent bg-black text-white w-full max-w-md mt-2 ml-2"
            type="text"
            value={novoItem}
            onChange={(e) => {
              setNovoItem(e.target.value);
            }}
            placeholder="Adicione uma tarefa"
          />
          <button className="btn btn-success mt-2 mr-2" type="submit">
            Adicione
          </button>
        </form>
      </div>
      <div id="listaTarefas" className="flex flex-col w-full m-4">
        <div className="flex justify-around">
          {lista.length < 1 ? (
            <img className="w-1/2" src={Icone} />
          ) : (
            lista.map((item, index) => (
              <div
                key={index}
                id={item.isCompleted ? "item completo" : "item"}
                className="flex flex-col w-full"
              >
                <span
                  onClick={() => {
                    clicou(index);
                  }}
                  className="w-full text-white text-2xl mt-2 ml-8"
                >
                  {item.text}
                </span>
                <button
                  onClick={() => {
                    deleta(index);
                  }}
                  id="del"
                  className="btn btn-outline btn-error mt-2 mr-8"
                >
                  Deletar
                </button>
              </div>
            ))
          )}
        </div>

        {/* <div id="itemCompleto" className="flex justify-around">
          <span className="w-full text-neutral-500 line-through text-opacity-20 text-2xl mt-2 ml-2">
            Tarefa de exemplo
          </span>
          <button className="btn btn-outline btn-error opacity-20 m-2">
            Deletar
          </button>
        </div> */}
      </div>
      <div
        id="deleteAll"
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl p-4 border-error bg-black hover:bg-error text-error hover:text-white"
      >
        Deletar Todas
      </div>
    </div>
  );
}

export default TodoList;
