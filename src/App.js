import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const divStyle = {
    background: 'linear-gradient(to right, #93C5FD, #F87171)',
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen w-auto container' style={divStyle}>
        <div className='flex flex-col rounded-lg bg-slate-50 p-1 mb-5'>
          <h1 className='text-center text-lg font-bold text-red-600 mb-4 pt-5 pb-5 ps-2 pe-2' style={{ fontSize: '50px' }}>
            <span className='hover:text-blue-600'>Todo</span>
            <span className='hover:text-blue-600'> List</span>
          </h1>
        </div>
        <div className="relative rounded-full bg-white shadow-md">
          <input
            type="text"
            className="w-full h-10 rounded-full pl-4 pr-10 focus:outline-none"
            placeholder="Enter text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="absolute right-0 top-0 h-full w-10 text-danger hover:text-red-500 flex items-center justify-center rounded-r-full"
            onClick={addTodo}
          >
            <FontAwesomeIcon icon={faPlus} className="text-red-600" />
          </button>
        </div>
        <div className="w-full">
          {todos.length > 0 && (
            <div className='rounded-lg bg-slate-50 p-1 mt-5' style={{ width: '5rem' ,position:'relative',left:'650px',fontSize:'25px'}}>
              <h2>ToDo:</h2>
            </div>
          )}
          {todos.map((todo, index) => (
            <div key={index} className='rounded-lg bg-slate-50 p-1 mt-1 mb-5' style={{ width: '20rem',position:'relative',left:'650px',fontSize:'19px'}}>
              <span className='text-black hover:text-red-700'>{todo}</span>
            </div>
          ))}
        </div>
        {todos.length === 0 && (
          <p className='text-slate-700' style={{ fontSize: '30px' }}>There is nothing to display</p>
        )}
      </div>
    </>
  );
}

export default App;
