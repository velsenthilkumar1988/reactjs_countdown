//small change for commit
import './App.css';
import './App.scss';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleSubtract=() => {
    setCount(count - 1);
  }
  const handleReset=() => {
    setCount(0);
  }
  const handleAdd=()=>{
    setCount(count + 1);
  }
  
  let color="#fff";
  if(count >= 1){
      color="yellow";
  }else if(count < 0){
      color="red";
  }else{
      color = "white";
  }
  
  return (
    <section className='counter-sec --flex-center'>
        <div className='container counter --card --center-all'>
          <h1 className='--text-light'>React Counter App</h1>
          <p className='count --flex-center --my2 --text-md --text-light --fw-bold' style={{color:color}}>{count}</p>
          <div className='buttons --my2'>
            <button className='--btn --btn-danger' onClick={handleSubtract}>- Subtract</button>
            <button className='--btn --btn-info' onClick={handleReset}>! Reset</button>
            <button className='--btn --btn-success' onClick={handleAdd}>+ Subtract</button>
          </div>
        </div>
    </section>
  );
}

export default App;
