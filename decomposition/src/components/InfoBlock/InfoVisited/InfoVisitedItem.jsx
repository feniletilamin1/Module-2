import React from 'react'

/**
    Функциональный компонент отвечающий за отображение конкретной ссылки блока с информацией о посещаемых ссылках
*/
export default function InfoVisitedItem(props) {
    const { link, text } = props;

    return (
        <li className="info__visit-list-item">
            <a href={link} className="info__visit-item-link">{text}</a>
        </li>
    )
}
