import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { routers } from './routers';
import Todo from './pages/todoList/todo';
import Home from './pages/home/index';
import EditToDo from './pages/editToDo/editToDo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/edit" element={<EditToDo />}>
          <Route path=":id" element={<EditToDo />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
