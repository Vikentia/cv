import React from 'react';
import style from './Education.module.scss';
import regexp from '../../assets/books/regexp.png';
import grokaemalg from '../../assets/books/grokaemalg.png';
import osnovyredux from '../../assets/books/osnovyredux.png';
import jssnulya from '../../assets/books/jssnulya.png';
import sovrshabl from '../../assets/books/sovrshabl.png';

export const Education = () => {
    const books = [
        { id: 1, title: 'Грокаем алгоритмы', url: grokaemalg },
        { id: 2, title: 'JavaScript с нуля', url: jssnulya },
        { id: 3, title: 'Современные шаблоны для разработки приложений', url: sovrshabl },
        { id: 4, title: 'Основы Redux', url: osnovyredux },
        { id: 5, title: 'Регулярные выражения для фронтендеров', url: regexp },
    ]
    return (
        <section className={style.education} id='education' >
            <h2>Education</h2>
            <div className={style.education__item}>
                <p>Course</p>
                <div className={style.education__description}>
                    <p>2021-...</p>
                    <p>Redev</p>
                    <p>Frontend Developer</p>
                </div>
            </div>
            <div className={style.education__item}>
                <p>University</p>
                <div className={style.education__description}>
                    <p>2009-2013</p>
                    <p>Gomel State Technical University P.O.Suhogo</p>
                    <p>Economist-marketer</p>
                </div>
            </div>
            <div className={style.education__item}>
                <p>CodeWars</p>
                <img src='https://www.codewars.com/users/Victoria_Kovaliova/badges/large' alt='pic' />
            </div>
            <div className={style.education__item}>
                <p>Books</p>
                <div className={style.books}>
                    {
                        books.map(book => (
                            <div key={book.id} className={style.book}>
                                <img src={book.url} className={style.book__image} alt='book' />
                                <p>{book.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section >
    )
}
