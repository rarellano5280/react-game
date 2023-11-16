import React, { useState, useEffect} from 'react';
import leaves from './assets/leaves.jpg';
import spider from './assets/spider.gif';
import './App.css';


function App() {

const [leaf, setleaf] = useState(new Array(9).fill(false))
const [score, setscore] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    const randomLeafIndex = Math.floor(Math.random() * leaf.length);
    const newLeaf = [...leaf];
    newLeaf[randomLeafIndex] = true;
    setleaf(newLeaf);

  }, 1000);

  return () => {
    clearInterval(interval);
  };
},[leaf])

function handleClick(index) {
  if (!leaf[index]) {
    return;
  }
  const newLeaf = [...leaf];
  newLeaf[index] = false;
  setscore(score + 1);
  setleaf(newLeaf);
}

  return (
    <>
    <h1>Score:{score} </h1>
    <div className='grid'>
      {leaf.map((isLeaves, idx)=>(
        <img src={isLeaves ? spider : leaves} 
        onClick={() => {
          handleClick(idx);
        }}/>
      ))}
    </div>
    </>
  )
}

export default App





