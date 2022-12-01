import React from "react";

const Header = (props) => {
    const {viewer} = props;

    return (
        <header>
            <h1>My Agora States</h1>
            {viewer ? (
                <div className={'avatar--wrapper'}>
                    <img
                        src={viewer.avatarUrl}
                        alt={`avatar of ${viewer.login}`}
                    />
                    <span>
                        {viewer.login}
                    </span>
                </div>
            ) : null}
        </header>
    )
}

export default Header;