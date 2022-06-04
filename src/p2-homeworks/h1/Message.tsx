import React from 'react'

import './MessageCss.css'

type messageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}
function Message (props:messageDataType) {
    return (
        <div className="messageWrapper">
        <img className="avatar" src={props.avatar}/>
            <div className="mainInfo">
                <h3 className="authorName">{props.name}</h3>
               <div className="messageTime">
                   <p className="mainMessage">{props.message}</p>
                   <p>{props.time}</p>
               </div>


            </div>

       </div>
    )
}

export default Message
