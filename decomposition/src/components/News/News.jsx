import React from 'react'
import NewsItem from './NewsItem'
import NewsTitle from './NewsTitle'

/**
    Функциональный компонент отвечающий за отображение блока новостей сайта
*/
export default function News(props) {
    const { titles, news } = props;

    return (
        <div className="news">
            <div className="news__titles-wrapper">
                {titles.map((title, index) =>
                    <NewsTitle key={index} link={title.link} text={title.text} />
                )}
            </div>
            <ul className="news__list">
                {news.map((item, index) =>
                    <NewsItem key={index} link={item.link} icon={item.icon} title={item.text} text={item.text} />
                )}
            </ul>
        </div >
    )
}
