import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Clock(props) {
    const { id, name, timeZone, onDelete } = props;

    function getTime(timeZone) {
        const now = new Date(); // текущая дата и время по умолчанию
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000); // получаем текущее время в UTC
        const localTime = new Date(utc + (3600000 * timeZone)); // добавляем смещение и получаем локальное время\
        return localTime;
    }

    const [clock, setClock] = useState(getTime(timeZone));


    useEffect(() => {
        const intevalId = setInterval(() => {
            setClock(getTime(timeZone));
        }, 1000)

        return () => {
            clearInterval(intevalId);
        }
    }, [timeZone]);


    return (
        <div className="clock">
            <h2 className="clock__name">{name}</h2>
            {clock.getHours() + ':' + clock.getMinutes() + ':' + clock.getSeconds()}
            <button className="clock__delete" onClick={() => onDelete(id)}>Удалить</button>
        </div>

    )
}

