import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow projectId="b1742d0c-c521-471d-81a6-301f573d4cba" 
     

      username={props.user.username}
     
      secret={props.user.secret} />
    </div>
  );
};

export default ChatsPage;