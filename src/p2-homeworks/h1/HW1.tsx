import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://www.interfax.ru/ftproot/photos/photostory/2019/07/09/week4_700.jpg',
    name: 'Artem',
    message: 'npm start нажимал? ',
    time: '22:00'
}

function HW1() {
    return (
        <div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}

        </div>
    )
}

export default HW1
