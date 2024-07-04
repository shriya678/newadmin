
import {Outlet} from 'react-router-dom'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'



export default function Layout() {
  return (
    <>  
    
        
        <div  style={{display:"flex" }}>
        
              <Sidebar/>
                
          <div style={{width:"100%"}} >
            <div >
            {<Navbar/> }
            </div>
          
          <div>
          <Outlet/> 
            </div>   
          
          </div>
                 
          
               
            
        
        </div>
      
      
    </>
  )
}


