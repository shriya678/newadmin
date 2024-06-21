import "./userinfo.css"
import profile from"../../../asset/image/profile.jpg"
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import styled from "styled-components"

const MoreOptionBox= styled.div`
  display: flex;
  gap:1rem;
`

export default function UserInfo() {
  return (
    <div className="userInfo">
      <div className="user">
            <img src={profile} alt=""/>
            <h2 style={{fontSize:".9rem"}}>Mayank</h2>
      </div>
      <MoreOptionBox>
            <MoreHorizIcon style={{fontSize:"2rem"}}/>
            <VideoCallIcon  style={{fontSize:"2rem", color:"red"}}/>
            <EditIcon style={{fontSize:"2rem"}}/>
      </MoreOptionBox>
    </div>
  )
}
