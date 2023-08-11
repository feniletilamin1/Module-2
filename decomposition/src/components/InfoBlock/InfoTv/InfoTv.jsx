import React from 'react'
import InfoTvItem from './InfoTvItem';

export default function InfoTv(props) {
    const { tvList } = props;
    return (
        <ul className="info__tv-list">
            {tvList.map((item, index) =>
                <InfoTvItem key={index} time={item.time} name={item.name} link={item.link} channelName={item.channel} iconItem={item.iconItem} />
            )}
        </ul>
    )
}
