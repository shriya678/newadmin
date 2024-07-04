import "./chat.css"
import List from "../../components/list/List";
import Chatss from "../../components/chats/Chatss";
import Detail from "../../components/detail/Detail"

export default function Chat() {
  return (
    <section id="chat">
      <div className="chatContainer">
          <List/>
          <Chatss/>
          <Detail/>
      </div>
    </section>
    
  )
}


