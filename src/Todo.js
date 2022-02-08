import React from 'react';

const Todo = ({item, toggleTodo}) => {
    const handleToggle =(id)=>{
        toggleTodo(item.id)
    }
    

  return (
      
  <div>
      <label>
          <input type='checkbox' checked={item.completed} onChange={handleToggle}/>
          {item.name}
          </label></div>);
};

export default Todo;
