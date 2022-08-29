import React from 'react'

export default function Input(props) {
    return (
        <div className={props.className}>
        <label htmlFor={props.type}>{props.label}</label>
        <input
          type={props.type}
          id={props.type}
          onChange={props.onChange}
          value={props.Value}
          onBlur={props.onBlur}
        />
        {props.children}
      </div>
    )
}
