import React, { useState } from 'react'


export default function ToDoApp() {
   const [task,setTask]=useState("");
   const[Todos,setTodos]=useState([]);

   const addTask=()=>{
if (task.trim() === "") return;
    setTodos([...Todos,{text:task,completed:false}]);
    setTask("");
    
   }
   const toggleComplete=(index)=>{
    const newTodos=[...Todos];
    newTodos[index].completed=!newTodos[index].completed;
    setTodos(newTodos);
   }
   const deleteTask=(index)=>{
    setTodos(Todos.filter((_,i)=>i!==index));
   };







  return <>
  
  <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent font-mono">
          To-Do List <i className="fas fa-tasks "></i>





        </h1>
        <div className='flex gap-3 mb-6'>
<input type='text'
value={task}
onChange={(e)=>setTask(e.target.value)}
onKeyPress={(e)=>e.key==="enter" && addTask()}
placeholder="Add a new task..."
className="flex-1 border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-indigo-500 focus:outline-none transition-all  font-mono text-lg"
          />
 <button onClick={addTask} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl text-xl font-bold hover:shadow-lg transform  hover:scale-110 transition-all duration-500  font-mono">Add
          </button>
        </div>
        {/* Tasks */}
        <ul className="space-y-3 mb-4">
          {Todos.length === 0 ? (
  <div className="text-center py-8 text-gray-400">
    <p className="text-5xl mb-2">
      <i className="fas fa-star  animate-spin text-yellow-400"></i>
    </p>
    <p className='font-mono '>No tasks yet. Add one to get started!</p>
  </div>
          ) : (
            Todos.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(index)}
                    className="w-5 h-5 cursor-pointer accent-indigo-600"
                  />
                  <span
                    className={`flex-1 text-lg ${
                      todo.completed
                        ? "line-through text-gray-400"
                        : "text-gray-800 font-medium"
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-500  font-bold text-2xl opacity-0 group-hover:opacity-100 transition-all  hover:scale-110 duration-500  animate-bounce"
                >
                   <i className="fas fa-trash-alt "></i>
                </button>
              </li>
            ))
          )}
        </ul>

        {/* Counter */}
        <div className="text-center">
          <p className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-2 rounded-full text-sm font-semibold">
            {Todos.length} {Todos.length === 1 ? 'task' : 'tasks'} added
          </p>
        </div>
      </div>
    </div>
  );

  </>
    }
