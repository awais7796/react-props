import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className='bg-black-400 mb-5'>Tailwind Test</h1>
<Card btnText="click here "/>
<Card btnText="click here "/>
<Card btnText="click here " text="luwbfhnnocooueciuebab whiobceoioaubowi  woihvieafhif viuh iuew afifhriu veu herf rih "/>
</>)
}

export default App
