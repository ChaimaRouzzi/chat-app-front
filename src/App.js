import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import ChannelListContainer from "./compoments/ChannelListContainer";
import ChannelContainer from "./compoments/ChannelContainer";
import "./App.css";
import Auth from "./compoments/Auth";

function App() {
  const authToken = false;
  const apiKey = "bga4bnnacwpb";
  const client = StreamChat.getInstance(apiKey);
  {
    if (!authToken) return <Auth />;
  }
  return (
    <div className="app__wrapper">
      <Chat client={client} theme=" team light">
        <ChannelListContainer>
          <ChannelContainer />
        </ChannelListContainer>
      </Chat>
    </div>
  );
}

export default App;
