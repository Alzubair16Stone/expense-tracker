import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import { Route, Routes } from 'react-router-dom'
import Tracker from './pages/Tracker'
import How from './pages/how'
import ExpenseWithChart from "./pages/ExpenseWithChart"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />



      <Routes>
        <Route path='/' element={<Tracker />} />
        <Route path='/how' element={<How />} />
        <Route path='/expence' element={<ExpenseWithChart />} />
      </Routes>
    </>
  )
}

export default App
