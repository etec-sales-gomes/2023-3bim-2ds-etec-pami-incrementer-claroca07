import { useState } from 'react'
import { Contador } from './components/contador'
import { Botao } from './components/button'
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
        <img src="https://static.wikia.nocookie.net/sanrio/images/1/10/Hello-kitty.png/revision/latest?cb=20171105235741" alt="" />
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
