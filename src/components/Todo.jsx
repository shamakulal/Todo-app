
import React, { useState } from 'react'; //  useState hook to manage local state.
import { useDispatch, useSelector } from 'react-redux'; //interact with the Redux store.
import TodoList from './TodoList';// child comp
import FilterButtons from './FilterButtons';
import { BsSearch, BsPlus } from 'react-icons/bs';// npm install react-icons --save
import { addTodo, updateSearchTerm } from '../redux/actions';// action form redux action.js


// compo defi

const Todo = () => {
  const todos = useSelector((state) => state.todos);// from redux store
  const filter = useSelector((state) => state.filter); // all,complete,incomp
  const dispatch = useDispatch();// Returns a reference to the dispatch function from the Redux store
  
  const [newTodoText, setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


  //Handling Add Todo
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') { //Checks if newTodoText is not empty.
      handleAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };


  //Handling Search Term Change
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'> TODO APP</h2>
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={20} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;