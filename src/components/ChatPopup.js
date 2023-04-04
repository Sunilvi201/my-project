import React, { useEffect, useRef } from "react";

function ChatPopup() {
    const msgerForm = useRef();
    const msgerInput = useRef();
    const msgerChat = useRef();
    const BOT_MSGS = [
        "Hi, how are you?",
        "Ohh... I can't understand what you trying to say. Sorry!",
        "I like to play games... But I don't know how to play!",
        "Sorry if my answers are not relevant. :))",
        "I feel sleepy! :(",
    ];

    const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
    const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
    const BOT_NAME = "Manohar Vishwakarma";
    const PERSON_NAME = "Sunil Vishwakarma";
    function formatDate(date) {
        const h = "0" + date.getHours();
        const m = "0" + date.getMinutes();
        return `${h.slice(-2)}:${m.slice(-2)}`;
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    useEffect(() => {
        msgerForm.current.addEventListener("submit", (event) => {
            event.preventDefault();
            const msgText = msgerInput.current.value;
            if (!msgText) return;
            appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
            msgerInput.current.value = "";
            botResponse();
        });

        function appendMessage(name, img, side, text) {
            //   Simple solution for small apps
            const msgHTML = `<div className="chat-row ${side}-chat"><div className="chat-profile" style={{backgroundImage: "url(${img})"}}>
            <img src="https://picsum.photos/200/300" alt="profile image" /></div><div className="msg-bubble"><div className="msg-info"><div className="msg-info-name">${name}</div><div className="msg-info-time">${formatDate(new Date())}</div></div>
            <div className="msg-text">${text}</div></div></div>`;
            msgerChat.current.insertAdjacentHTML("beforeend", msgHTML);
            msgerChat.current.scrollTop += 500;
        }

        function botResponse() {
            const r = random(0, BOT_MSGS.length - 1);
            const msgText = BOT_MSGS[r];
            const delay = msgText.split(" ").length * 100;

            setTimeout(() => {
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            }, delay);
        }
    }, []);

    return (
        <div className="chat-popup" id="myForm">
            <main className="chat-inner" ref={msgerChat}>
                <div className="chat-row left-msg">
                    <div className="chat-profile" style={{ backgroundImage: "url(https://image.flaticon.com/icons/svg/327/327779.svg)" }}>
                        <img src="https://picsum.photos/200/300" alt="profile image" />
                    </div>
                    <div className="msg-bubble">
                        <div className="msg-info">
                            <div className="msg-info-name">Manohar Vishwakarma</div>
                            <div className="msg-info-time">{formatDate(new Date())}</div>
                        </div>
                        <div className="msg-text">
                            Hey, How are you! if any query just send me a text.
                        </div>
                    </div>
                </div>
                {/* <div className="chat-row right-chat">
                    <div className="chat-profile" style={{ backgroundImage: "url(https://image.flaticon.com/icons/svg/145/145867.svg)" }}>
                        <img src="https://picsum.photos/200/300" alt="profile image" />
                    </div>
                    <div className="msg-bubble">
                        <div className="msg-info">
                            <div className="msg-info-name">Sajad</div>
                            <div className="msg-info-time">12:46</div>
                        </div>
                        <div className="msg-text">You can change your name in JS section!</div>
                    </div>
                </div> */}
            </main>
            <form className="chat-input-box" ref={msgerForm}>
                <input
                    type="text"
                    className="msger-input"
                    ref={msgerInput}
                    placeholder="Enter your message..."
                />
                <label className="file-attach me-2" htmlFor="uploadFile">
                    <input type="file" accept="" id="uploadFile" className="d-none" />
                    <i className="fa-solid fa-paperclip p-0"></i>
                </label>
                <button type="submit" className="btn btn-info">
                    <i className="fa-solid fa-paper-plane p-0"></i>
                </button>
            </form>
        </div>
    );
}
export default ChatPopup;
