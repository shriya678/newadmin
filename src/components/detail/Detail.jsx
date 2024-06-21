import "./detail.css"
import styled from "styled-components"
import girl1 from "../../asset/image/girl1.jpg"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const NameBox=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:.7rem;
  padding:2rem;
  border-bottom: 1px solid #0aee197c;
  
`
const Image=styled.img`
  width: 6rem;
  height: 6rem;
  border-radius:50%;
  object-fit: cover;
  border: 1px solid white
`
const Setting=styled.div`
  display: flex;
  flex-direction: column;
  gap:1.5rem;
  padding:2rem;
`


export default function Detail() {
  return (
    <div className="detail">
      <NameBox>
        <Image src={girl1}/>
        <h2 style={{fontSize:"1.5rem"}}>Kriti</h2>
        <p style={{fontSize:"1rem"}}>Lorem ipsum dolor sit amet.</p>
      </NameBox>
      <Setting>
        <div style={{display:"flex",justifyContent:"space-between", alignItems: "center"}}>
          <p style={{fontSize:"1rem"}}>Chat Settings</p>
          <ExpandCircleDownIcon/>
        </div>
        <div style={{display:"flex",justifyContent:"space-between", alignItems: "center"}}>
          <p style={{fontSize:"1rem"}}>Privacy & help</p>
          <ExpandCircleDownIcon/>
        </div>
        <div style={{display:"flex",justifyContent:"space-between", alignItems: "center"}}>
          <p style={{fontSize:"1rem"}}>Shared Media</p>
          <ExpandCircleDownIcon/>
        </div>
        
      </Setting>
    </div>
  )
}
