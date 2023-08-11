import React from 'react'

/**
    Функциональный компонент отвечающий за отображение блока рекламы
*/
export default function Add(props) {
    const { image, title, description } = props;
    return (
        <div className="add">
            <img src={image} alt="cat" className="add__image" />
            <h2 className="add__title">{title}</h2>
            <p className="add__desc">{description}</p>
        </div>
    )
}
