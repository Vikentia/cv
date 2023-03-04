import React from 'react';
import style from './Experience.module.scss';

export const Experience = () => {
    return (
        <section className={style.experience} id='experience'>
            <h2>Experience</h2>
            <div className={style.experience__item}>
                <p>2018-2023</p>
                <div className={style.experience__description}>
                    <p>Individual entrepreneur</p>
                    <ul  className={style.experience__list}>
                        <li>Determining the target audience, product promotion. </li>
                        <li>Search for suppliers, conclusion of contracts.</li>
                        <li>Maintaining documentation in accordance with the law.</li>
                        <li>Monitoring of competitors, development of marketing activities.</li>
                    </ul>
                </div>
            </div>
            <div className={style.experience__item}>
                <p>2014-2016</p>
                <div className={style.experience__description}>
                    <p>Marketer</p>
                    <p>Private trade unitary enterprise 'UnitaTorg'</p>
                    <ul className={style.experience__list}>
                        <li>Analysis of the market and competitors, determining the preferences of the target audience.</li>
                        <li>Management of advertising campaigns.</li>
                        <li>Development of marketing materials such as promotional brochures, websites and social media.</li>
                        <li>Conclusion of contracts with clients, development of projects according to the requirements of clients.</li>
                        <li>Monitoring the fulfillment of contractual obligations by the manufacturer.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
