import React from "react";
import todo from '../../assets/screenshots/todo.png'
import network from '../../assets/screenshots/network.png';
import RickAndMorti from '../../assets/screenshots/RickAndMorti.png';

import style from './Projects.module.scss';

export const Projects = () => {

    return (
        <section className={style.projects} id='projects'>
            <h2>Projects</h2>
            <div className={style.projects__item}>
                <img src={RickAndMorti} alt='screenshot' />
                <div className={style.projects__description}>
                    <p>Rick and Morti</p>
                    <ul className={style.projects__list}>
                        <li>Deploy: <a href='https://vikentia.github.io/rick-and-morti/' target='_blank'>vikentia.github.io/rick-and-morti/</a> </li>
                        <li>Code: <a href='https://github.com/Vikentia/rick-and-morti' target='_blank'>github.com/Vikentia/rick-and-morti</a> </li>
                        <li>Used: JS, TS, Redux, Redux-thunk, react-router-dom, antd, axios, HTML, Sass.</li>
                        <li>Work with API, pagination, search, filter. </li>
                    </ul>
                </div>
            </div>
            <div className={style.projects__item}>
                <img src={todo} alt='screenshot' />
                <div className={style.projects__description}>
                    <p>Todo</p>
                    <ul className={style.projects__list}>
                        <li>Deploy: <a href='https://vikentia.github.io/todo/' target='_blank'>vikentia.github.io/todo/</a> </li>
                        <li>Code: <a href='https://github.com/Vikentia/todo' target='_blank'>github.com/Vikentia/todo</a> </li>
                        <li>Used: JS, TS, Redux, HTML, Sass, antd, uuid.</li>
                        <li>Add, modify, delete tasks, filter the list of completed and not completed tasks. </li>
                    </ul>
                </div>
            </div>
            <div className={style.projects__item}>
                <img src={network} alt='screenshot' />
                <div className={style.projects__description}>
                    <p>Social Network</p>
                    <ul className={style.projects__list}>
                        <li>Deploy: <a href='https://vikentia.github.io/SocialNetwork/' target='_blank'>vikentia.github.io/SocialNetwork/</a> </li>
                        <li>Code: <a href='https://github.com/Vikentia/SocialNetwork' target='_blank'>github.com/Vikentia/SocialNetwork</a> </li>
                        <li>Used: JS, TS, Redux, Redux-thunk, react-router-dom, antd, axios, uuid, formik, HTML, Sass.</li>
                        <li>Login with a password, the ability to write messages, fill out a profile, view profiles of other users and subscribe to their accounts. </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}
