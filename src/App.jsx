import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Questions from './components/Questions'

const App = () => {
  return (
    <div className='max-w-100vw'>
      <Navbar />
      <Dashboard />
      <Questions />
    </div>
  )
}

export default App
