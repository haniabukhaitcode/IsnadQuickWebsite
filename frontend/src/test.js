import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
  const[count, setCount] = useState(0);
  const[message, setMessage] = useState('Click for count');

  const handleClick = () => {
    const newCount = count +1;
    setCount(newCount);
    if(count===5){
      setMessage('Well done we got to 5')
    } else if(count===10){
      setMessage(('Well done we got to 10'))
    }else{
      setMessage("keep clicking")
    }
  }

  return (
    <div>
      <h1>Frontend + Backend Demo</h1>
      <p>{count}</p>
      <p>{message}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Test;