import React,{useState,useEffect} from 'react'

const useEffectsHooks = () => {
    const [count, setCount] = useState(0);
    const [state,setState]= useState(false);
    useEffect(() => {
      const timerid = setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
      return ()=>{
        clearTimeout(timerid);
      }
    },[state]);
  
    return(
        <>
            <h2>Use Effect Hooks Use</h2>
            <h3>I've rendered {count} times!</h3>
            <button onClick={()=>{
                setState(true);
            }}>Refresh</button>
        </>
    );
}

export default useEffectsHooks