import React from 'react'

export default function InfoTvItem(props) {
    const { iconItem, time, name, link, channelName } = props;

    return (
        <li className="info__tv-list-item">
            {iconItem != null &&
                <img src={iconItem} alt="item-icon" className="info__tv-list-item-icon" />
            }
            {time != null &&
                <p className="info__tv-list-item-time">{time}</p>
            }
            <p className="info__tv-list-item-name">{name}</p>
            <a href={link} className="info__tv-list-item-link">{channelName}</a>
        </li>
    )
}
