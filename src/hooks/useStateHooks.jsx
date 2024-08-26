import React,{useState} from 'react'

const useStateHooks = () => {
    const [count,SetCount]= useState(0);
  return (
    <>
        <h2>useState Hooks use</h2>
        <h4>counter:-{count}</h4>
        <button onClick={()=>{SetCount(count+1)}}>Increase</button>
        <button onClick={()=>{SetCount(count-1)}}>Decrease</button>
        <button onClick={()=>{SetCount(0)}}>Reset</button>
    </>
  )
}

export default useStateHooks