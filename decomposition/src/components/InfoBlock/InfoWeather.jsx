import React from 'react'

/**
    Функциональный компонент отвечающий за отображение блока c погодой
*/
export default function InfoWeather(props) {
    const { icon, degrees, morning, afternoon } = props;

    return (
        <div className="info__weather">
            <img src={icon} alt="weather-icon" className="info__weather-icon" />
            <p className="info__weather-degrees">{degrees}</p>
            <p className="info__weather-day-info">Утром {morning}, <br /> Днём {afternoon}</p>
        </div>
    )
}
