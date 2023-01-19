import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import Screen from './components/Screen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='calculator-container'>
        
        <div className='file'>
          <Screen input='12345'/>
        </div>
        <div className='file'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>+</Button>
        </div>

        <div className='file'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>

        <div className='file'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>*</Button>
        </div>
        <div className='file'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>

      </div>
    </div>
  )
}

export default App;
