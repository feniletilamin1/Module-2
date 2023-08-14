import React from 'react'

export default function Note(props) {
    const { id, onDelete, text } = props;
    return (
        <li className="notes-list__item">{text}
            <button onClick={() => onDelete(id)} className="notes-list__item-delete">x</button>
        </li>
    )
}
