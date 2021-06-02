import React from 'react'
import './styles/Button.css'

export default function Button(props) {
    return (
        <>
            <button id={props.id} onClick={props.click} type="button" disabled={props.disabled}>{props.content}</button>
        </>
    )
}
