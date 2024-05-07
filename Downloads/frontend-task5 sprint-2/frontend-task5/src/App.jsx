import { useState } from 'react'
import './App.css'
import 'tailwindcss/tailwind.css';

import Dashboard from './components/AdminDashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dashboard/>
     
  
     <div className='text-red-400 underline'></div>
     
    </>
  )
}

export default App
