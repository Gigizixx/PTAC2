import React from 'react'
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home/Home.jsx';
import ToDo from './Todo/todo.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Todo' element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)