import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";
const TeamChannelPreview = ({ channel, type }) => {
  const { channel: activeChannel, client } = useChatContext();
  console.log(activeChannel);
  const ChannelPreview = () => {
    <p className="channel-preview__item">
      # {channel?.data.name || channel?.data.id}{" "}
    </p>;
  };
  const DirectePreview = () => {
    const members = Object.values(channel?.state.memmbers).filter(
      ({ user }) => user.id != client.userID
    );
    return (
      <div className="channel-preview__item single">
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.fullName || members[0]?.user?.id}
          size={24}
        />
        <p>{members[0]?.user?.fullName || members[0]?.user?.id}</p>
      </div>
    );
  };

  return (
    <div
      className={
        channel?.id === activeChannel?.id
          ? "channel-preview__wrapper__selected"
          : "channel-preview__wrapper"
      }
      onClick={() => {
        console.log(channel);
      }}
    >
      {type === "team" ? <ChannelPreview /> : <DirectePreview />}
    </div>
  );
};

export default TeamChannelPreview;
