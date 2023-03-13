import React from 'react';
import style from './About.module.scss';

import avatar from '../../assets/my-photo.jpg';
import scooter from '../../assets/hobby/scooter.png';
import listening from '../../assets/hobby/listening.png';
import movie from '../../assets/hobby/movie.png';
import camera from '../../assets/hobby/photo-camera.png';
import puzzle from '../../assets/hobby/puzzle.png';
import rubik from '../../assets/hobby/rubik.png';
import sewingMachine from '../../assets/hobby/sewing-machine.png';
import tea from '../../assets/hobby/tea.png';

export const About = () => {
    return (
        <section className={style.about}>
            <div className={style.about__block}>
                <img src={avatar} alt='avatar' className={style.avatar} />
                <div className={style.about__text}>
                    <h1>Victoria Kovaliova</h1>
                    <h3>Frontend React developer</h3>
                    <a href='../assets/my-photo.jpg' download>
                        <button className={style.cvBtn}>Download CV</button>
                    </a>
                </div>
            </div>
            <div className={style.about__info}>
                <p>I am a Front-end developer based in Gomel, Belarus.</p>
                <p>I have knowledge of Typescript/Javascript, React, CSS (SASS).</p>
                <p>I am looking forward to working in team. I am not only willing to deepen my knowledge but I also want to apply them to the real products.</p>
                <div className={style.about__hobbies}>
                    <span>My interests:</span>
                    <img src={scooter} alt='icon_hobby' />
                    <img src={listening} alt='icon_hobby' />
                    <img src={movie} alt='icon_hobby' />
                    <img src={tea} alt='icon_hobby' />
                    <img src={camera} alt='icon_hobby' />
                    <img src={puzzle} alt='icon_hobby' />
                    <img src={rubik} alt='icon_hobby' />
                    <img src={sewingMachine} alt='icon_hobby' />
                </div>
            </div>
        </section>
    )
}
