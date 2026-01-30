import React from 'react'
import '../App.css'
import Header from './Header'
import TaskForm from './TaskForm'



function App() {
  

  return (
    <div className="min-h-screen bg-gray-900 from-blue-100 to-black-300 text-gray-900 p-8">
     
      <Header />
      <TaskForm />

      
    </div>
  )
}

export default App
