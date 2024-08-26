import React, { useContext } from 'react'
import myContext from './MyContext'
import ComponentB from './ComponentB';
const ReceiverData = () => {
    const shareData = useContext(myContext);
  return (
    <>
        <h2>UseContext Hooks</h2>
        <h3>Name:- {shareData.name}</h3>
        <h3>phone No.:- {shareData.phoneNo}</h3>
        <ComponentB/>
    </>
  )
}

export default ReceiverData