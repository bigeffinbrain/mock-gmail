import React from 'react'

const Email = ({ sender, subject, message, date }) => {
    return (
        <div>
            <h4>{sender}</h4>
            <h6>{subject}</h6>
            <h7>{date}</h7>
            <p>{message}</p>
        </div>
    )
}

export default Email