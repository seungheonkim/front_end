import React from 'react';
import '../static/css/Discussion.css';

export const Discussion = ({discussion}) => {
    const {id, url, author, avatarUrl, title, createdAt, answer} = discussion;
    const parsedDate = new Date(createdAt).toLocaleDateString('ko-kr');

    return (
        <li className="discussion__container">
            <div className="discussion__avatar--wrapper">
                <img className={'discussion__avatar--image'} src={avatarUrl} alt={`avatar of ${author}`}/>
            </div>
            <div className="discussion__content">
                <div className="discussion__title">
                    <a href={url}>{title}</a>
                </div>
                <div className="discussion__userInfo">
                    {`${author} / ${parsedDate}`}
                </div>
            </div>
            <div className={'discussion__answered'}>
                <p>{answer ? '✅' : '❎'}</p>
            </div>
        </li>
    );
};