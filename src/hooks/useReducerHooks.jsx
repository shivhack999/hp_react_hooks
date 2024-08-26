import React, { useReducer } from 'react'

const useReducerHooks = () => {
    const reducer = (state, action) =>{
        switch(action){
            case 'plus':
                return {width: state.width + 15,color:state.color}
            case 'minus':
                return { width: Math.max(state.width-15, 2),color:state.color}
            case 'colorGreen':
                return {width: state.width,color:'green'};
            case 'colorYellow':
                return {width: state.width,color:'yellow'}
            default:
                throw new Error("what's going on ?")
        }
    }
    const initialState = {width:15, color:'red'};
    const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
        <h2>useReducer Hooks</h2>
        <div style={{ background: state.color, height: '30px', width: state.width }}></div>
        <button onClick={() =>dispatch('plus')}>Increase bar size</button>
        <button onClick={() =>dispatch('minus')}>Decrease bar size</button>
        <button onClick={()=>dispatch('colorGreen')}>Bar color change (green)</button>
        <button onClick={()=>dispatch('colorYellow')}>Bar color change (green)</button>
    </>
  )
}

export default useReducerHooks