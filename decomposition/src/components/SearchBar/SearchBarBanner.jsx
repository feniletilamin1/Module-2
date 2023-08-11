import React from 'react'

export default function SearchBarBanner(props) {
    const { image } = props;

    return (
        <img src={image} alt="banner" className="search-bar__banner" />
    )
}
