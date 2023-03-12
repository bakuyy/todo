import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Classes from './pages/Classes'
import Notes from './pages/Notes'
import Clubs from './pages/Clubs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Notes/>}></Route>
            <Route path='/problem' exact element={<Classes/>}></Route>
            <Route path='/main' exact element={<Clubs/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
