import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import States from './components/States';

const initalState = [
  {
    id: 0,
    count : 0
  },
  {
    id: 1,
    count : 0
  }
]

function App() {
  const[state,setState] = useState(initalState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  }

  const handleIncrement = (id) => {
   const updatedCount = state.map((c) => {
    if(id === c.id){
      return {
        ...c,
        count: c.count + 1
      }
    }
    return {...c}
   })
   setState(updatedCount);
  }

  const handleDecrement = (id) => {
    const updatedCount = state.map((c) => {
      if(id === c.id){
        return {
          ...c,
          count: c.count - 1
        }
      }
      return {...c}
     })
     setState(updatedCount);
  }

  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
            Simple Counter Application
        </h1>
        {
          state.map((count) => (
            <Counter key={count.id} id={count.id} count={count.count} handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>
          ))
        }
        <States count={totalCount()}/>
    </div>
  );
}

export default App;
