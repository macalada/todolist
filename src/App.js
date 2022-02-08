import './App.css';
import {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid' ;

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos]= useState([{id:1, name:'Todo1', completed:true}])
  const todoNameRef = useRef();

  useEffect(()=>{
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  },[])

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  const toggleTodo = (id)=>{
    const newTodo = [...todos]
    const todo = newTodo.find(x => x.id === id)
    todo.completed = !todo.completed
    setTodos(newTodo)
  }

  const handleAddTodo =(event) =>{
    const name = todoNameRef.current.value
    if(name === ' ')return
    console.log(name)
    todoNameRef.current.value = null;
    setTodos(prevTodos =>{
      return [...prevTodos, {id:uuidv4(), name:name, completed:false}]
    })
  }

  const handleClear=()=>{
    const newTodos = todos.filter(x=>!x.completed)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type='text'></input>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClear}>Clear Completed Todo</button>
      <div>{todos.filter(x=>!x.completed).length} left todo</div>
        </div>
  );
}

export default App;
