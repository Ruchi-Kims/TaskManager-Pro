import React from 'react'
import checklistImage from "../assets/images/checklist.png";


export default function Header() {
  return (
    <header className="text-center bg-blue-600 p-6 rounded-lg shadow-md">
        <img src={checklistImage} alt="Checklist" className="w-32 h-32 mx-auto animate-bounce" />
        <h1 className="text-4xl font-bold text-white mt-4 tracking-wider">TaskManager Pro</h1>
        <p className="text-gray-200 text-lg mt-2 italic">
        Organisez vos tâches avec style ! 🎯
      </p>
        </header>
  )
}
