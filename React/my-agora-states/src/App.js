import React, {useEffect, useState} from "react";
import './static/css/App.css';
import Discussions from "./Components/Discussions";
import Form from "./Components/Form";

function App() {
    const url = 'http://localhost:4000';
    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        getDiscussion();
    }, []);

    //discussion 불러오기
    const getDiscussion = () => {
        return fetch(url + '/discussions')
            .then(response => response.json())
            .then(data => {
                setDiscussions(data);
            })
    }

    //discussion 추가
    const addDiscussion = ({author, title, discussion}) => {
        const newDiscussion = {
            author: author,
            title: title,
            bodyHTML: discussion,
        };

        fetch(url + '/discussions/', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newDiscussion),
        }).then(response => {
            if (response.status === 201) {
                getDiscussion();
            }
        })
    }

    return (
        <div className={'App'}>
            <main>
                <Form addDiscussion={addDiscussion}/>
                <Discussions discussions={discussions}/>
            </main>
        </div>
    );
}

export default App;
