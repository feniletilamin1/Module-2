import React from 'react'

/**
    Функциональный компонент отвечающий за отображение конкретной новостной ссылки
*/
export default function NewsItem(props) {
    const { link, icon, text } = props;

    return (
        <li className="news__list-item" style={{ background: `url(${icon}) no-repeat` }} >
            <a href={link} className="news__list-item-link">{text}</a>
        </li>
    )
}
