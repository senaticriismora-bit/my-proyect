import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Menu from './components/menu.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1> Hola Mundo</h1>
      <Menu> a </Menu>
      <Menu>  b</Menu>
      <Menu> c </Menu>
      <Menu> d </Menu>
    </div>
  )
  

}

export default App
