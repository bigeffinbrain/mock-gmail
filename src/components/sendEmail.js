import React from 'react'

const SendEmail = () => {
    return (
        <>
            <h4>Subject</h4>
                <input id="email-subject"/>
            <h4>Message</h4>
                <textarea id="email-contents"/>
            <button type="submit">Send</button>
        </>
    )
}

export default SendEmail