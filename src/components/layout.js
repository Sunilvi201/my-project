import React,{useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./footer";
import ChatPopup from "./ChatPopup";
import Header from "./header";
import Homepage from "../pages/homepage";

const Layout = (props) => {
  const [openChat, setChat] = useState(false);
  return (
    <div className="main-wrapper">
      <Header />
      <div className="inner-layout">
      {props.children}
      </div>
      {
        openChat && (
          <ChatPopup />
        )
      }
      <button className="chat-open-button text-white text-start rounded-3" onClick={() => setChat(!openChat)}>
        {
          !openChat ? (<><i className="fa-solid fa-comments me-3"></i>Let's Chat</>) : (<><i className="fa-solid fa-xmark me-3"></i>Close</>)
        }
      </button>
        <Footer />
    </div>
  );
};

export default Layout;
