import "./chats.css"
import styled from "styled-components"
import girl1 from "../../asset/image/girl1.jpg"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import InfoIcon from '@mui/icons-material/Info';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';


const ProfileInfo=styled.div`
  background-color: black;
  padding: 2rem 1.5rem 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid green;
  flex: 1;
`

const Image=styled.img`
  width: 70px;
  height: 70px;
  border-radius:50%;
  object-fit: cover;
  border: 1px solid white
`


const Messages= styled.div`
  flex: 6;
  overflow: scroll;
  padding:2rem 1rem 2rem 1rem;
`
const TypeMessage=styled.div`
  background-color: black;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0rem 1.5rem 0rem 1.5rem;
`
const Input =styled.input`

  border-radius: 10px;
  background-color:grey;
  font-size: 1rem;
  width: 29rem;
  padding: 0.5rem;

`

const MessageBox=styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    height: fit-content;
    
    
`
const Message=styled.div`
    background-color:black;
    max-width:35rem;
    padding:2rem;
    border-radius:1rem;
`
const MessageOwn=styled.div`
 background-color:#0f9d69;
 padding: 2rem;
 max-width:35rem;
 border-radius:1rem;
  
`
const Time=styled.span`
  color:black
`
const Imagemessage=styled.img`
  width: 3rem;
  height: 3rem;
  border-radius:50%;
  object-fit: cover;
  border: 1px solid white

`


export default function Chats() {
  
  return (
    <div className="chat">
      <ProfileInfo>
        <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
            
            <Image src={girl1}/>
            
            
            <div>
                <h2 style={{fontSize:"1.5rem"}}>Kriti</h2>
                <p style={{fontSize:"1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            
        </div>
        <div style={{display:"flex",gap:"1rem"}}>
            <PhoneInTalkIcon style={{color:"#0aee19dd"}}/>
            <VideoCameraFrontIcon style={{color:"red"}}/>
            <InfoIcon/>
        </div>
        
      </ProfileInfo>
      <Messages>
          <div style={{ display:"flex",justifyContent: true? "flex-end" : "flex-start" }}>
              <MessageBox>
                
                <MessageOwn>
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat, ducimus accusamus alias repellendus provident est in laboriosam a ad quam deserunt expedita deleniti!
                      </p>
                  </MessageOwn>
                      <Time>1 min ago</Time>
                
              </MessageBox>
          </div>
        
          <div style={{ display:"flex",justifyContent: false ? "flex-end" : "flex-start",gap:"1rem" }}>
                <Imagemessage src={girl1}/>
                <MessageBox>
                
                <Message>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat, ducimus accusamus alias repellendus provident est in laboriosam a ad quam deserunt expedita deleniti!
                    </p>
                </Message>
                  
                    <Time>1 min ago</Time>
              
                  
              </MessageBox>
          </div>
        
          <div style={{ display:"flex",justifyContent: true ? "flex-end" : "flex-start" }}>
              <MessageBox>
                
                <MessageOwn>
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat, ducimus accusamus alias repellendus provident est in laboriosam a ad quam deserunt expedita deleniti!
                      </p>
                  </MessageOwn>
                      <Time>1 min ago</Time>
                
              </MessageBox>
          </div>
        <div style={{ display:"flex",justifyContent: false ? "flex-end" : "flex-start", gap:"1rem" }}>
                <Imagemessage src={girl1}/>
                <MessageBox>
                
                <Message>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat, ducimus accusamus alias repellendus provident est in laboriosam a ad quam deserunt expedita deleniti!
                    </p>
                </Message>
                  
                    <Time>1 min ago</Time>
              
                  
              </MessageBox>
          </div>
              
      </Messages>
      <TypeMessage>
          <AddPhotoAlternateIcon/>
          <PhotoCameraIcon/>
          <MicIcon/>
          <Input type="text"placeholder="Type a message...."/>
          <InsertEmoticonIcon/>
          <SendIcon/>
      </TypeMessage>
    </div>
  )
}
