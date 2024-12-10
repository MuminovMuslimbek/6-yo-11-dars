import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import { useTranslation } from 'react-i18next';

function Cards() {
    const { t } = useTranslation();

    const cardData = [
        {
            img: img1,
            title: t('titleCard', { returnObjects: true })[0],
            population: t('populationValue', { returnObjects: true })[0],
            region: t('regionValue', { returnObjects: true })[0],
            capital: t('capitalValue', { returnObjects: true })[0],
        },
        {
            img: img2,
            title: t('titleCard', { returnObjects: true })[1],
            population: t('populationValue', { returnObjects: true })[1],
            region: t('regionValue', { returnObjects: true })[1],
            capital: t('capitalValue', { returnObjects: true })[1],
        },
        {
            img: img3,
            title: t('titleCard', { returnObjects: true })[2],
            population: t('populationValue', { returnObjects: true })[2],
            region: t('regionValue', { returnObjects: true })[2],
            capital: t('capitalValue', { returnObjects: true })[2],
        },
        {
            img: img4,
            title: t('titleCard', { returnObjects: true })[3],
            population: t('populationValue', { returnObjects: true })[3],
            region: t('regionValue', { returnObjects: true })[3],
            capital: t('capitalValue', { returnObjects: true })[3],
        },
        {
            img: img5,
            title: t('titleCard', { returnObjects: true })[4],
            population: t('populationValue', { returnObjects: true })[4],
            region: t('regionValue', { returnObjects: true })[4],
            capital: t('capitalValue', { returnObjects: true })[4],
        },
        {
            img: img6,
            title: t('titleCard', { returnObjects: true })[5],
            population: t('populationValue', { returnObjects: true })[5],
            region: t('regionValue', { returnObjects: true })[5],
            capital: t('capitalValue', { returnObjects: true })[5],
        },
        {
            img: img7,
            title: t('titleCard', { returnObjects: true })[6],
            population: t('populationValue', { returnObjects: true })[6],
            region: t('regionValue', { returnObjects: true })[6],
            capital: t('capitalValue', { returnObjects: true })[6],
        },
        {
            img: img8,
            title: t('titleCard', { returnObjects: true })[7],
            population: t('populationValue', { returnObjects: true })[7],
            region: t('regionValue', { returnObjects: true })[7],
            capital: t('capitalValue', { returnObjects: true })[7],
        },
    ];

    return (
        <div className="flex flex-wrap gap-[50px] max-w-[1280px] w-full mx-auto my-[50px] justify-center">
            {cardData.map((card, index) => (
                <div key={index} className="p-4 max-w-[30%] text-[#111517] w-full bg-white shadow-md hover:shadow-lg rounded-lg flex flex-col gap-[7px] dark:bg-[#2B3844] dark:text-[#FFFFFF]">
                    <img src={card.img} alt={card.title} className="w-full h-auto rounded" />
                    <h3 className="text-lg font-bold mt-2">{card.title}</h3>
                    <p className="text-sm">{t('population')}: {card.population}</p>
                    <p className="text-sm">{t('region')}: {card.region}</p>
                    <p className="text-sm">{t('capital')}: {card.capital}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;
