import { useState } from 'react'
import { Botao } from './components/botao'
import { Contador } from './components/contador'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function IncrementarNumero() {
    setCount(count + 1);
  }

  function DecrementarNumero() {
    setCount(count - 1);
  }

  return (
    <>
      <div className="Corpo">
        <header>
          <div className="titulo">
            <h1>Contador - Projeto em REACT</h1>
          </div>
        </header>
        <div className="content">
          <div className="botoes">
            <Botao onClick={DecrementarNumero} text='-' />
            <Contador count={count} />
            <Botao onClick={IncrementarNumero} text='+' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
