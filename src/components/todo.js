import React, {useState} from 'react'
import TodoForm from './TodoForm'

function todo() {

  const [edit, setEdit] = useState({
    id: null,
    value:''
  })

  return TodoList.map((todo,index) => (
    <div  class={todo.isComplete ? 'todo-row complete' :
  'todo-row'} key = {index}>

    <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
      {todo.text}
    </div>
    <div class="icons">
      
    </div>

    </div>
  ))
}

export default todo
