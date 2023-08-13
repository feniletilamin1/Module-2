import React from 'react'
import Clock from './Clock';

export default function ClockList(props) {
    const { clocks, onDelete } = props;
    return (
        <div className="clock-list">
            {clocks.map(item =>
                <Clock key={item.id} name={item.name} timeZone={item.timeZone} id={item.id} onDelete={onDelete} />
            )}
        </div>
    )
}
