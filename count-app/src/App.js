import React, { useState } from 'react'

const App = () => {
  const[count ,setCount] = useState(0);

  const increment = ()=>{
    setCount(count=>count+1)
   }
  
  const decrement = ()=> {
    setCount(count=> count-1)
   }
   const dabul = ()=> {
    setCount(count=> count+count)
   }

   const sub = ()=> {
    setCount(count=> count-count)
   }

   const half = ()=> {
    
    setCount(count=> count/2)
    
   }
  return (
    
    <div>
      <center>
   <h1>Count: {count}</h1>
     <button onClick={increment}>increment</button> 
     <button onClick={decrement}>decrement</button> 
     <button onClick={dabul}>dabul</button> 
     <button onClick={sub}>Sub</button>
     <button onClick={half}>half</button> 
     </center>
    </div>
  )
}

export default App
