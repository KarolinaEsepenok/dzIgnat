import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://kolobok.ua/i/97/11/41/971141/image_main/a9dff2ad42341fb7152def8cadb7822b-quality_70Xresize_crop_1Xallow_enlarge_0Xw_698Xh_465.jpg',
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
