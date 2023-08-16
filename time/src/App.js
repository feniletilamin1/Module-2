import React, {useState} from 'react';
import './App.css';

function DateTime(props) {
    const {date } = props;

    const objDateTime = new Date(date);
    const dateTimeNow = new Date();

    const difference = dateTimeNow.getTime() - objDateTime.getTime();
    const minutes = (difference / 1000 / 60).toFixed();
    const hours = (minutes / 60).toFixed();
    const days = (hours / 24).toFixed();

  
    if(minutes < 60) {
        return (
        <p className="date">{minutes} минут назад</p>
      )
    }
    else if(hours < 24 ) {
      return (
        <p className="date">{hours} часа(-ов) назад</p>
      )
    }

    return (
        <p className="date">{days} дня(-ей) назад</p>
    )
}

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTime date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video key={item.id} url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            id: 1,
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            id: 2,
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            id: 3,
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            id: 4,
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            id: 5,
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            id: 6,
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-08-16 15:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}