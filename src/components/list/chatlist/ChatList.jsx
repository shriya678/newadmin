import "./chatlist.css"
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import styled from 'styled-components'
import girl1 from"../../../asset/image/girl2.jpg"
import girl2 from"../../../asset/image/girl1.jpg"
import man2 from"../../../asset/image/man2.jpg"

const MembersBox=styled.div`
  display: flex;
  flex-direction: column;
  gap:2rem;
  flex:1;
  overflow:hidden
`
const SearchBox=styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-right:1.5rem;
  
`
const Input=styled.input`
  
  background-color: transparent;
  color: white;
  padding: .5rem;
  font-size: 1rem;
`

const Search=styled.div`
 display:flex;
  gap:1rem;
  background-color:#122415c1;
  border-radius: .4rem;
  overflow:hidden;
  align-items:center;  
  padding: 0 1rem 0 1rem;
  border-color:black;
  border: 1px solid;
`
const MemberList= styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  flex:1
`
const User= styled.div`
    display: flex;
    align-items:center;
    gap: 20px;
    border-bottom: .5px solid #0aee1969;
    border-top: .5px solid #0aee1969;
    padding: 2rem;
`
const Image=styled.img`
      width: 60px;
      height: 60px;
      border-radius:50%;
      object-fit: cover;
      border: 1px solid white
`


export default function ChatList() {
  return (
    
    <MembersBox >
      <SearchBox>
          <Search>
            <SearchIcon style={{color:"#0aee19"}}/>
            <Input type="search" placeholder="search" />
          </Search>
          <AddBoxIcon style={{justifyContent: "flex-end", fontSize:"2rem", color:"#0aee19"}}/>
          
      </SearchBox>
      
          <MemberList>
            
            <User>
                    <Image src={girl1} alt=""/>
                    <h2 style={{fontSize:".9rem"}}>Mayank</h2>
              </User>
              <User>
                    <Image src={girl2} alt=""/>
                    <h2 style={{fontSize:".9rem"}}>Mayank</h2>
              </User>
             <User>
                  <Image src={man2} alt=""/>
                  <h2 style={{fontSize:".9rem"}}>Mayank</h2>
            </User> 
            <User>
                    <Image src={girl1} alt=""/>
                    <h2 style={{fontSize:".9rem"}}>Mayank</h2>
              </User>
              <User>
                    <Image src={girl2} alt=""/>
                    <h2 style={{fontSize:".9rem"}}>Mayank</h2>
              </User> 
             <User>
                    <Image src={man2} alt=""/>
                    <h2 style={{fontSize:".9rem"}}>Mayank</h2>
              </User>
        
        
           </MemberList>
     
      
      
    </MembersBox>
    
    
    
  )
}
