import React from 'react';
import style from './Skills.module.scss';

import typescript from '../../assets/icons/typescript.svg';
import javascript from '../../assets/icons/javascript.svg';
import sass from '../../assets/icons/sass.svg';
import html from '../../assets/icons/html.svg';
import reactIcon from '../../assets/icons/reactIcon.svg';
import redux from '../../assets/icons/redux.svg';
import git from '../../assets/icons/git.svg';
import bem from '../../assets/icons/bem.svg';

export const Skills = () => {
    return (
        <section className={style.skills} id='skills'>
            <h2>Skills</h2>
            <div className={style.skills__list}>
                <div className={style.skills__item}><img src={javascript} alt='icon' /><p>JavaScript</p></div>
                <div className={style.skills__item}><img src={typescript} alt='icon' /><p>TypeScript</p></div>
                <div className={style.skills__item}><img src={html} alt='icon' /><p>HTML5</p></div>
                <div className={style.skills__item}><img src={sass} alt='icon' /><p>Sass</p></div>
                <div className={style.skills__item}><img src={reactIcon} alt='icon' /><p>React</p></div>
                <div className={style.skills__item}><img src={redux} alt='icon' /><p>Redux, Redux-thunk</p></div>
                <div className={style.skills__item}><img src={git} alt='icon' /><p>Git</p></div>
                <div className={style.skills__item}><img src={bem} alt='icon' /><p>BEM</p></div>
            </div>
        </section>
    )
}
