import './App.css';
import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Classes from './pages/Classes'
import Notes from './pages/Notes'
import Clubs from './pages/Clubs';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleSubmit = e=> {
    e.preventDefault();
    // props.onSubmit({
    //   id: Math.floor(Math.random()*10000),
    //   text:input
    // })
    setInput('')
  }

  const handleChange = e => {
    setInput(e.target.value)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Notes/>}></Route>
            <Route path='/classes' exact element={<Classes/>}></Route>
            <Route path='/main' exact element={<Clubs/>}></Route>
          </Routes>
      </BrowserRouter>
    <div>
      <form class='todo-form' onSubmit={handleSubmit}>
        <input
        type="text" 
        placeholder='Add a todo' 
        value={input}
        name="text"
        onChange={handleChange}/>
      <button>Add Todo</button>
      </form>
    </div>
    </div>
  );
}

export default TodoForm;
