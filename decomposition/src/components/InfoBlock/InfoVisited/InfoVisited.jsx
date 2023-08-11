import React from 'react'
import InfoVisitedItem from './InfoVisitedItem'

/**
    Функциональный компонент отвечающий за отображение блока c информацией о посещаемых ссылках
*/
export default function InfoVisited(props) {
    const { visitList } = props
    return (
        <ul className="info__visit-list">
            {visitList.map((item, index) =>
                <InfoVisitedItem key={index} link={item.link} text={item.text} />
            )}
        </ul>
    )
}
