import React from 'react';
import style from './About.module.scss';

import avatar from '../../assets/my-photo.jpg';

export const About = () => {
    return (
        <section className={style.about}>
            <img src={avatar} alt='avatar' className={style.avatar} />
            <div className={style.about__text}>
                <h1>Victoria Kovaliova</h1>
                <h3>Frontend developer</h3>
                <a href='../assets/my-photo.jpg' download>
                    <button className={style.cvBtn}>Download CV</button>
                </a>
            </div>
        </section>
    )
}
