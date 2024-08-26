import React,{useContext} from 'react'
import myContext from './MyContext'
const ComponentB = () => {
    const shareData = useContext(myContext);
  return (
   <>
        <div>ComponentB</div>
        <h3>Name:- {shareData.name}</h3>
        <h3>phone No.:- {shareData.phoneNo}</h3>
   </>
  )
}

export default ComponentB