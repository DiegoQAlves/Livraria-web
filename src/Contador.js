import { useState } from "react"

function App() {
 const [contador, setContagem] = useState(0)
 const [historico, setHistorico] = useState(0)

  function add(){
    console.log("Adicionando 1 numero")
    setContagem(contador + 1)
  }

  function remove(){
    console.log("Removendo 1 numero")
    setContagem(contador - 1)

  }

  return (
    <div className="App">
      <p>contagem: {contador}</p>
      <button onClick={add}>Adicionar 1</button>
      <button onClick={remove}>Remover 1</button>
    </div>
  );
}

export default App;
