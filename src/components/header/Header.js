import React from 'react'
import style from './Header.module.scss';

export const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <a href='#'>About</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#experience'>Experience</a>
                <a href='#education'>Education</a>
                <a href='#languages'>Languages</a>
                <a href='#contacts'>Contacts</a>
            </nav>
        </header>
    )
}
