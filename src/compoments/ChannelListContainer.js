import React, { useState } from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import ChannelSearch from "../compoments/ChannelSerch";
import TeamChannelList from "../compoments/TeamChannelList";
import TeamChannelPreview from "../compoments/TeamChannelPreview";

import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";
const cookies = new Cookies();

const Sidbar = ({ logout }) => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={HospitalIcon} alt="Hospital" width="30" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner" onClick={logout}>
          <img src={LogoutIcon} alt="Logout" width="30" />
        </div>
      </div>
    </div>
  );
};

const CompanyHeader = () => {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Medical Chat App</p>
    </div>
  );
};

function ChannelListContainer() {
  const logout = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("username");
    cookies.remove("fullName");
    cookies.remove("avatarURL");
    cookies.remove("hashedPassword");
    cookies.remove("phoneNumber");

    window.location.reload();
  };
  return (
    <>
      <Sidbar logout={logout} />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(PreviewPrps) => {
            <TeamChannelPreview {...PreviewPrps} type="team" />;
          }}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(PreviewPrps) => {
            <TeamChannelPreview {...PreviewPrps} type="messaging" />;
          }}
        />
      </div>
    </>
  );
}

export default ChannelListContainer;
