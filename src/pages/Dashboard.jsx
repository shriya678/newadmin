import React, { createContext, useState } from 'react'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'


export const SelectBoxContext = createContext();


const Dashboard = () => {

 

  const [selectRole,setSelectRole] = useState();

  const [selectBar,setSelectBar] = useState();

  console.log("select Role: ",selectRole);
  console.log("Select Bar: ",selectBar);

  return (
    <SelectBoxContext.Provider value={{selectRole,setSelectRole,selectBar,setSelectBar}}>
    <div className="grid grid-cols-1 w-full">
    <div className="col-span-2">
      <LeftColumn />
    </div>
    <div className="w-full">
      <RightColumn />
    </div>
  </div>
  </SelectBoxContext.Provider>
  )
}

export default Dashboard