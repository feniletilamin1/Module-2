import React from 'react'

/**
    Функциональный компонент отвечающий за отображение блока c информацией с различным содержимым
*/
export default function Info(props) {
    const { title, iconTitle, body } = props;

    return (
        <div className="info">
            <div className="info__title-wrapper">
                <h3 className="info__title">{title}</h3>
                {iconTitle != null &&
                    <img src={iconTitle} alt="title-icon" className="info__title-icon" />
                }
            </div>
            {body}
        </div>
    )
}
