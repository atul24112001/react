import React from 'react'

export default function MyParagraph(props) {
    console.log("MyPara")

    return (
        <p>
            {props.children}
        </p>
    )
}
