import React from 'react'

/**
    Функциональный компонент отвечающий за отображение конкретной информации о валюте
*/
export default function CurrencyItem(props) {
    const { currency, amount, change } = props;

    return (
        <li className="currencys__list-item">
            < p className="currencys__list-item-currency" > {currency}</p >
            <p className="currencys__list-item-value">{amount}</p>
            <p className="currencys__list-item-change">{change}</p>
        </li >
    )
}
