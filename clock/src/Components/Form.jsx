import React from 'react'
import { useRef } from 'react'

export default function Form(props) {
    const { onSubmit } = props;
    const inputName = useRef(null);
    const inputTimeZone = useRef(null);

    const sendForm = (e) => {
        e.preventDefault();
        const name = inputName.current.value;
        const timeZone = inputTimeZone.current.value;
        if (name !== "")
            onSubmit(name, timeZone);
        else
            alert("Введите название");
    }
    return (
        <form onSubmit={sendForm} className="form">
            <label htmlFor="name" className="form__label">Название</label>
            <input id="name" type="text" className="form__input" ref={inputName} />
            <label htmlFor="timeZone" className="form__label">Часовой пояс</label>
            <input placeholder="Пример: 3 или -1" id="timeZone" type="text" pattern="-?\d*" className="form__input" ref={inputTimeZone} />
            <button type="submit" className="form__submit">Добавить</button>
        </form>

    )
}
