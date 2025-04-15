import React from 'react';
import Navbar from './Navbar';
import TodoList from './TodoList';
import TodoContext from '../contexts/TodoContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTodo from './AddTodo';

const App = () => {
    return (
        <TodoContext>
            <Router>
                <Navbar></Navbar>
                <br />
                <div className="uk-container">
                    <Routes>
                        <Route path="/create" element={<AddTodo />} />
                        <Route path="/" element={
                            <div>
                                <TodoList />
                            </div>
                        } />
                    </Routes>
                </div>
            </Router>
        </TodoContext>
    );
}

export default App;