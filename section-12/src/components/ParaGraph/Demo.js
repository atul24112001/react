import React from 'react'
import MyParagraph from './MyParagraph'

export default React.memo( function Demo(props) {
    console.log("Demo")
    return (
        <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>
    )
}
)