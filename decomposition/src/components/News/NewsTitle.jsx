import React from 'react'

/**
    Функциональный компонент отвечающий за отображение конкретной новостной ссылки
*/
export default function NewsTitle(props) {
    const { link, text } = props;
    return (
        <a href={link} className="news__title">{text}</a>
    )
}
