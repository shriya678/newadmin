import  { createContext, useState } from 'react'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'


export const SelectBoxContext = createContext();


const Dashboard = () => {

 

  const [selectStatus,setSelectStatus] = useState();

  const [selectBar,setSelectBar] = useState();

  const [selectService, setSelectService] = useState();

  return (
    <SelectBoxContext.Provider value={{selectStatus,setSelectStatus,selectBar,setSelectBar,selectService,setSelectService}}>
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

