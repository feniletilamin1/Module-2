import React from 'react'
import SearchBarLinksItem from './SearchBarLinksItem';

/**
    Функциональный компонент отвечающий за отображение блока ссылкок над поиском
*/
export default function SearchBarLinks(props) {
    const { links } = props;

    return (
        <ul className="search-bar-links">
            {links.map((item, index) =>
                <SearchBarLinksItem key={index} link={item.link} text={item.text} />
            )}
        </ul>
    )
}
