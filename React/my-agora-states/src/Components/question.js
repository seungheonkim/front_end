import React from 'react';
import './question.css';

const Question = ({question}) => {
    const parsedDate = new Date(question.createdAt).toLocaleDateString('ko-kr');

    return (
        <li className="question" id={question.id}>
            <div className="question__profile">
                <img src={question.avatarUrl}/>
            </div>
            <div className="question__content">
                <div className="question__userInfo">
                    <div className="question__userInfo--wrapper">
                        {/* TODO : 유져 이름이 있어야 합니다. */}
                        <span className='question__author'>{question.author}</span>
                        {/* TODO : 트윗 생성 일자가 있어야 합니다. parsedDate를 이용하세요. */}
                        <span className={'question__createdAt'}>{parsedDate}</span>
                    </div>
                </div>
                <div className="question__message">
                    {question.title}
                </div>
            </div>
        </li>
    );
};

export default Question;
