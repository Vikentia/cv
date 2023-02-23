import React from 'react';
import style from './Contacts.module.scss';


import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import telegram from '../../assets/icons/telegram.svg';
import email from '../../assets/icons/email.svg';

export const Contacts = () => {
    return (
        <section className={style.contacts} id='contacts'>
            <h2>Contacts</h2>
            <div className={style.contacts__links}>
                <a href='https://t.me/Vikenya' target='_blank'><img src={telegram} alt='telegram' /></a>
                <a href='https://www.linkedin.com/in/victoria-kavaliova/' target='_blank'><img src={linkedin} alt='linkedin' /></a>
                <a href='https://github.com/Vikentia/' target='_blank'><img src={github} alt='github' /></a>
                <a href='mailto:victkovaliova@gmail.com' target='_blank'><img src={email} alt='email' /></a>
            </div>
        </section>
    )
}
