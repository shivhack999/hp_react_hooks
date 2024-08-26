import React from 'react'
import USH from './hooks/useStateHooks';
import UEH from './hooks/useEffectsHooks'
// import UCH from './hooks/useContextHooks/ComponentA';
import MyContext from './MyContext';
import ReceiverData from './ReceiverData';
import URH from './hooks/useReducerHooks';
const App = () => {
  const shareData = {
    name:'shiv',
    phoneNo:'7905573608'
  }
  return (
    <>
      <MyContext.Provider value={shareData}>
        <h1>Hooks use</h1>
        <USH/>
        <UEH/>
        {/* <UCH/> */}
        <ReceiverData/>
      </MyContext.Provider>
      <URH/>
    </>
  )
}

export default App