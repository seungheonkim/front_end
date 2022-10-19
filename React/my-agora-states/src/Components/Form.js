import React from "react";
import '../static/css/Form.css'

const Form = ({addDiscussion}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const author = document.querySelector('#name').value;
        const title = document.querySelector('#title').value;
        const discussion = document.querySelector('#story').value;
        console.log(author, title, discussion);
        addDiscussion({author, title, discussion});
    }

    return (
        <section className={'form__container'}>
            <form action="" method="get" className="form" onSubmit={handleSubmit}>
                <div className="form__input--wrapper">
                    <div className="form__input--name">
                        <label htmlFor="name">이름: </label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div className="form__input--title">
                        <label htmlFor="name">제목: </label>
                        <input type="text" name="title" id="title" required/>
                    </div>
                    <div className="form__textbox">
                        <label htmlFor="story">질문: </label>
                        <textarea id="story" name="story" placeholder="질문을 작성하세요" required></textarea>
                    </div>
                </div>
                <div className="form__submit">
                    <input type="submit" id={'submit'} value='submit'/>
                </div>
            </form>
        </section>
    )
}

export default Form;