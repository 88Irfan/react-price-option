import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>

      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>


    </>
  )
}

export default App
