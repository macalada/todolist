import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, toggleTodo}) => {
  return (
      <>
      {todos.map(item => <Todo key={item.id} item={item} toggleTodo={toggleTodo}/>)}
      </>
  )
  ;
};

export default TodoList;
