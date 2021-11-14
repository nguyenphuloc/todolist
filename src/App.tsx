import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Todo from './pages/todoList/todo';
import AddToDo from './pages/addToDo/addToDo';
import EditToDo from './pages/editToDo/editToDo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/add" element={<AddToDo />}></Route>
        <Route path="/edit" element={<EditToDo />}>
          <Route path=":id" element={<EditToDo />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
