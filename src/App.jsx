import { useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css'
import Button from './components/Button'
import Screen from './components/Screen'
import ButtonClear from './components/ButtonClear'




function App() {
  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if(input) {
      setInput(evaluate(input))
    } else {
      alert("Ingrese un valor para relizar los cálculos")
    }
    
  }

  return (
    <div className='App'>
      <div className='calculator-container'>
        
        <div className='file'>
          <Screen input={input}/>
        </div>
        <div className='file'>
          <Button manejarClic={addInput}>7</Button>
          <Button manejarClic={addInput}>8</Button>
          <Button manejarClic={addInput}>9</Button>
          <Button manejarClic={addInput}>+</Button>
        </div>

        <div className='file'>
          <Button manejarClic={addInput}>4</Button>
          <Button manejarClic={addInput}>5</Button>
          <Button manejarClic={addInput}>6</Button>
          <Button manejarClic={addInput}>-</Button>
        </div>

        <div className='file'>
          <Button manejarClic={addInput}>1</Button>
          <Button manejarClic={addInput}>2</Button>
          <Button manejarClic={addInput}>3</Button>
          <Button manejarClic={addInput}>*</Button>
        </div>

        <div className='file'>
          <Button manejarClic={calculateResult}>=</Button>
          <Button manejarClic={addInput}>0</Button>
          <Button manejarClic={addInput}>.</Button>
          <Button manejarClic={addInput}>/</Button>
        </div>

        <div className='file'>
          <ButtonClear manejarClear={ ()=> setInput('')}>
            CLEAR
          </ButtonClear>
        </div>

      </div>
    </div>
  )
}

export default App;
