import React from 'react'
import News from './News/News'
import Currencys from './Currencys/Currencys';
import NewsIcon from '../icons/message-icon.svg'
import AddImage from '../images/cat-image.png'
import Add from './Add';
import SearchBar from './SearchBar/SearchBar';
import InfoWeather from './InfoBlock/InfoWeather';
import WeatherIcon from '../icons/weather-icon.svg';
import TitleIcon from '../icons/live-icon.svg';
import Info from './InfoBlock/Info';
import InfoVisited from './InfoBlock/InfoVisited/InfoVisited';
import InfoText from './InfoBlock/InfoText';
import InfoTv from './InfoBlock/InfoTv/InfoTv';
import PlayIcon from '../icons/playIcon.svg';

const titles = [
    { link: "ya.ru", text: "Сейчас в Сми" },
    { link: "ya.ru", text: "В Германии" },
    { link: "ya.ru", text: "Рекомендуем" },

];

const news = [
    { icon: NewsIcon, text: "Путин упростил получение автомобильных номеров", link: "ya.ru" },
    { icon: NewsIcon, text: "Путин упростил получение автомобильных номеров", link: "ya.ru" },
    { icon: NewsIcon, text: "Путин упростил получение автомобильных номеров", link: "ya.ru" },
];

const currencys = [
    { currency: "USD", amount: "63,52", change: "+0,09" },
    { currency: "EUR", amount: "63,52", change: "+0,42  " },
    { currency: "WQD", amount: "63,52", change: "-0,29" },
]

const searchBarLinks = [
    { link: "ya.ru", text: "Новости" },
    { link: "ya.ru", text: "Картинки" },
    { link: "ya.ru", text: "Переводчик" },
];

const visitList = [
    { link: "ya.ru", text: "Недвижимость - о сталинках" },
    { link: "ya.ru", text: "Маркет - люстры и светильники" },
    { link: "ya.ru", text: "Авто.ру - лада калина" },

]

const tvList = [
    { time: "02:00", name: "Джинглики", link: "ya.ru", channel: "Карусель" },
    { time: "19:00", name: "Поле чудес", link: "ya.ru", channel: "Первый" },
]

const liveList = [
    { iconItem: PlayIcon, name: "Управление как искусство", link: "ya.ru", channel: "Успех" },
    { iconItem: PlayIcon, name: "Ночь. Мир в это время", link: "ya.ru", channel: "earthTv" },
]

/**
    Функциональный компонент отвечающий за отображение тела сайта
*/
export default function Main() {
    return (
        <main className="main">
            <section className="news">
                <div className="container">
                    <div className="news__wrapper">
                        <div className="news__inner-wrapper">
                            <News titles={titles} news={news} />
                            <Currencys currencys={currencys} />
                        </div>
                        <Add image={AddImage} title={"Работа над ошибками"} description={"Смотрите на Яндексе и запоминайте"} />
                    </div>
                </div>
            </section>
            <section className="search">
                <div className="container">
                    <SearchBar links={searchBarLinks} example={"фаза луны сегодня"} />
                </div>
            </section>
            <section className="info-section">
                <div className="container">
                    <div className="info-section__blocks">
                        <div className="info-section__blocks-wrapper">
                            <Info title={"Погода"} body={<InfoWeather icon={WeatherIcon} degrees={"+20"} morning={"+17"} afternoon={"+23"} />} />
                            <Info title={"Посещаемое"} body={<InfoVisited visitList={visitList} />} />
                        </div>
                        <div className="info-section__blocks-wrapper">
                            <Info title={"Карта Германии"} body={<InfoText text={"Расписания"} />} />
                            <Info iconTitle={TitleIcon} title={"Телепрограмма"} body={<InfoTv tvList={tvList} />} />
                        </div>
                        <div className="info-section__blocks-wrapper">
                            <Info title={"Эфир"} body={<InfoTv tvList={liveList} />} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
