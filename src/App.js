import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Classes from './pages/Classes';
import Notes from './pages/Notes';
import Clubs from './pages/Clubs';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Notes/>}></Route>
            <Route path='/classes' exact element={<Classes/>}></Route>
            <Route path='/main' exact element={<Clubs/>}></Route>
            <Route path='/notes' exact element={<Notes/>}></Route>
          </Routes>
      </BrowserRouter>
      <TodoList/>
    </div>
  );
}

export default App;
