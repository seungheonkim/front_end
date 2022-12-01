import React from "react";

const Discussion = (props) => {
    const { url, author, title, createdAt, answer, category } = props.discussion;

    return (
        <li className="discussion__container">
            <div className="avatar--wrapper">
                <img
                    className="avatar--image"
                    src={author.avatarUrl}
                    alt={`avatar of ${author.login}`}
                />
            </div>
            <div className="discussion__content">
                <div className="discussion__category">{`[${category.name}]`}</div>
                <h2 className="discussion__title">
                    <a href={url}>{title}</a>
                </h2>
                <div className="discussion__information">{`${author.login} / ${new Date(
                    createdAt
                ).toLocaleTimeString()}`}</div>
            </div>
            <div className="discussion__answered">
                <p>{answer ? '☑' : '☒'}</p>
            </div>
        </li>
    )
}

export default Discussion;