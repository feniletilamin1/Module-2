import React from 'react'

/**
    Функциональный компонент отвечающий за отображение конкретной ссылки поиска
*/
export default function SearchBarLinksItem(props) {
    const { link, text } = props;

    return (
        <li className="search-bar-links__item">
            <a href={link} className="search-bar-links__item-link">{text}</a>
        </li>
    )
}
