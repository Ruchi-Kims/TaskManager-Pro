import React, { useState } from 'react' // Filter.jsx

export default function Filter({ tasks, setTasks, taskCompletion, deleteTask }) {

  const [filter, setFilter] = useState("all")

  function filterTasks() {
    if (filter === "completed") return tasks.filter(task => task.completed)
    if (filter === "pending") return tasks.filter(task => !task.completed)
    return tasks
  }

  return (
    <div className="mt-6">

      {/* Boutons de filtre */}
      <div className="flex flex-col sm:flex-row gap-2 justify-center">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-md w-full sm:w-auto ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } transition`}
        >
          Toutes
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded-md w-full sm:w-auto ${
            filter === "completed"
              ? "bg-green-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } transition`}
        >
          Terminées
        </button>

        <button
          onClick={() => setFilter("pending")}
          className={`px-4 py-2 rounded-md w-full sm:w-auto ${
            filter === "pending"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } transition`}
        >
          En cours
        </button>
      </div>

      {/* Liste des tâches */}
      <ul className="space-y-3 my-4">
        {filterTasks().map((task) => (
          <li
            key={task.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-3 shadow-md rounded-md gap-3"
          >
            <span
              className={`flex-1 break-words ${
                task.completed ? "text-gray-500 line-through" : ""
              }`}
            >
              {task.text}
            </span>

            <div className="flex items-center justify-between sm:justify-end gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => taskCompletion(task.id)}
                className="w-5 h-5 cursor-pointer"
              />

              <button
                onClick={() => deleteTask(task.id)}
                className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                🗑️ Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}
