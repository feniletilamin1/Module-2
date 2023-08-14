import React from 'react'
import { useRef } from 'react';

export default function Form(props) {
    const { onSubmit } = props;
    const textArea = useRef(null);

    function sendNote(e) {
        e.preventDefault();
        onSubmit({ id: 0, content: textArea.current.value });
    }

    return (
        <form onSubmit={sendNote} className="form">
            <textarea required ref={textArea} className="form__textarea"></textarea>
            <button type="submit" className="form__submit">Добавить заметку</button>
        </form>
    )
}
