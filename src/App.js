
import './App.css';
import Counter from './components/Counter';
import State from './components/State';
import { useState } from 'react';

const initialState = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  }
]

function App() {

  const[state,setState] = useState(initialState)

  const increment = (id) => {
    const updatedState = state.map((c) => {
      if(id === c.id){
        return{
          ...c,
          count: c.count + 1
        }
      }else{
        return {...c}
      }
    })
    setState(updatedState)
  }

  const decrement = (id) => {
    const updatedState = state.map((c) => {
      if(id === c.id){
        return{
          ...c,
          count: c.count + 1
        }
      }else{
        return {...c}
      }
    })
    setState(updatedState)
  }

  const totalCount = () => {
    return state.reduce((total, count) => total + count.count, 0)
  }

  return (
    <div className="App">
       <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                {
                  state.map((c) => <Counter key={c.id} id={c.id} count={c.count} incrementHandler={increment} decrementHandler={decrement} />)
                }
                <State count={totalCount()} />
            </div>
        </div>
    </div>
  );
}

export default App;
