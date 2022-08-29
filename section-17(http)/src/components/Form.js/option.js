import React from 'react'

export default function Option(props) {
    // props.onGetId(props.id);
    return (
        <option id={props.id}>
            {props.name}
        </option>
    )
}
