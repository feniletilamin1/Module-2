import React from 'react'
import CurrencyItem from './CurrencyItem';

/**
    Функциональный компонент отвечающий за отображение блока валют и их дневной разницы
*/
export default function Currencys(props) {
    const { currencys } = props;

    return (
        <div className="currencys">
            <ul className="currencys__list">
                {currencys.map((item, index) =>
                    <CurrencyItem key={index} currency={item.currency} amount={item.amount} change={item.change} />
                )}
            </ul>
        </div>
    )
}
