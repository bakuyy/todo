import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props){
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    });

    const handleSubmit = e=> {
      e.preventDefault();
      props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
      })
      setInput('')
    }
  
    const handleChange = e => {
      setInput(e.target.value)
    }
  return (
    <div>
      <form className='todo-form text-left ml-12 mb-4' onSubmit={handleSubmit}>
        <input
          placeholder='Add a todo'
          value={input}
          onChange={handleChange}
          name='text'
          className='todo-input'
          ref={inputRef}
        />

      <button className = "text-md p-2  ml-4 bg-[#0048AB] text-white rounded-xl">Add Todo</button>
      </form>
    </div>

  )
}

export default TodoForm
