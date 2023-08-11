import React from 'react'

/**
    Функциональный компонент отвечающий за отображение блока c текстом
*/
export default function InfoText(props) {
    const { text } = props;
    return (
        <p className="info__text">{text}</p>
    )
}
