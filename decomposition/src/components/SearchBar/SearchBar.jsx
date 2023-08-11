import React from 'react'
import SearchBarLinks from './SearchBarLinks/SearchBarLinks'
import SearchBarBanner from './SearchBarBanner';
import BannerImage from '../../images/banner.jpg'

/**
    Функциональный компонент отвечающий за отображение блока поиска
*/
export default function SearchBar(props) {
    const { links, example } = props;
    return (
        <div className="search-bar">
            <SearchBarLinks links={links} />
            <form action="/#" className="search-bar__form">
                <input type="search" className="search-bar__form-input" />
                <button type="submit" className="search-bar__form-submit">Найти</button>
            </form>
            <p className="search-bar-example">Найдётся всё. Например, {example}</p>
            <SearchBarBanner image={BannerImage} />
        </div>
    )
}
