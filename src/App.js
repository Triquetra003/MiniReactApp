import logo from './logo.svg';
import './App.css';
import TriviaPage from './Pages/TriviaPage';
import ToDoList from './Pages/ToDoList';
import Home from './Pages/home'
import Navbar from './components/Navbar'
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <Routes>
          <Route element={<Navbar></Navbar>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/react-trivia" element={<TriviaPage/>}/>
          <Route path="/to-do-list" element={<ToDoList/>}/>
          </Route>
      </Routes>

    </HashRouter>
  );
}

export default App;
