import "./list.css"
import ChatList from "./chatlist/ChatList"
import UserInfo from"./userInfo/UserInfo"
export default function List() {
  return (
    <div className="list" >
        <UserInfo/>
        <ChatList/>
    </div>
  )
}
