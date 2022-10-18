import React, {useState} from "react";
import './Discussions.css'
import agoraStatesDiscussions from "../static/data";
import Discussion from "../Components/Discussion";

const Form = () => {

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [discussions, setDiscussions] = useState(agoraStatesDiscussions);

    const handleButtonClick = (event) => {

        event.preventDefault();

        const img = document.querySelector('img')
        const url = img.src;

        const discussion = {
            id: discussions.length + 1,
            createdAt: new Date(),
            title: `${title}`,
            url: "https://github.com/codestates-seb/agora-states-fe/discussions/3",
            author: `${name}`,
            answer: null,
            bodyHTML:
                '<p dir="auto">Agora States에서 질문을 작성할 때 우리는 <a href="https://www.markdownguide.org/basic-syntax/" rel="nofollow">markdown</a>이라는 문법 형식을 사용해서 글을 작성합니다.<br>\nmarkdown 문법 중에서 꼭 필요한 것들만 살펴 봅시다!</p>\n<h3 dir="auto">1. 글씨 크기 조절하기</h3>\n<p dir="auto">markdwon을 사용해 6가지의 글씨 크기를 표현할 수 있습니다.</p>\n<div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="# 첫 번째\n## 두 번째\n### 세 번째\n#### 네 번째\n##### 다섯 번째\n###### 여섯 번째"><pre class="notranslate"><code class="notranslate"># 첫 번째\n## 두 번째\n### 세 번째\n#### 네 번째\n##### 다섯 번째\n###### 여섯 번째\n</code></pre></div>\n<h1 dir="auto">첫 번째</h1>\n<h2 dir="auto">두 번째</h2>\n<h3 dir="auto">세 번째</h3>\n<h4 dir="auto">네 번째</h4>\n<h5 dir="auto">다섯 번째</h5>\n<h6 dir="auto">여섯 번째</h6>\n<h3 dir="auto">2. 글씨 강조하기</h3>\n<p dir="auto">markdown을 사용하면 쉽게 글씨를 강조할 수 있습니다.</p>\n<div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="*기운 글씨*\n**두꺼운 글씨**"><pre class="notranslate"><code class="notranslate">*기운 글씨*\n**두꺼운 글씨**\n</code></pre></div>\n<p dir="auto"><em>기운 글씨</em></p>\n<p dir="auto"><strong>두꺼운 글씨</strong></p>\n<h3 dir="auto">3. 리스트 형식</h3>\n<p dir="auto">리스트 형식으로 표현할 수 있습니다.</p>\n<div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="1. 첫 번째\n2. 두 번째\n3. 세 번째\n\n* 순서 없음\n* 순서 없음\n* 순서 없음"><pre class="notranslate"><code class="notranslate">1. 첫 번째\n2. 두 번째\n3. 세 번째\n\n* 순서 없음\n* 순서 없음\n* 순서 없음\n</code></pre></div>\n<ol dir="auto">\n<li>첫 번째</li>\n<li>두 번째</li>\n<li>세 번째</li>\n</ol>\n<ul dir="auto">\n<li>순서 없음</li>\n<li>순서 없음</li>\n<li>순서 없음</li>\n</ul>\n<h3 dir="auto">4. 코드 예쁘게 쓰기 ☜（ﾟ∀ﾟ☜） 중요!</h3>\n<p dir="auto">여러분이 올린 질문을 읽을 사람들을 위해 예쁘게 정리 된 코드를 입력해 주세요! <code class="notranslate">```java```</code> block을 활용해 보세요!</p>\n<pre class="notranslate">```java\n이 안쪽에 코드를 넣으면 코드가 예쁘게 보입니다.\n\nString greeting = "Hello World!";\n\nSystem.out.println(greeting); // "Hello World!"\n```\n\n</pre>\n<div class="highlight highlight-source-java position-relative overflow-auto" data-snippet-clipboard-copy-content="// 출력되는 코드!\n\nString greeting = &quot;Hello World!&quot;;\n\nSystem.out.println(greeting); // &quot;Hello World!&quot;"><pre><span class="pl-c">// 출력되는 코드!</span>\n\n<span class="pl-smi">String</span> <span class="pl-s1">greeting</span> = <span class="pl-s">"Hello World!"</span>;\n\n<span class="pl-smi">System</span>.<span class="pl-s1">out</span>.<span class="pl-en">println</span>(<span class="pl-s1">greeting</span>); <span class="pl-c">// "Hello World!"</span></pre></div>\n<p dir="auto">markdown을 사용해 Agora States를 <strong>많이 많이</strong> 이용해 주세요!</p>',
            avatarUrl: url,
        };

        setDiscussions([discussion, ...discussions]);
        console.log(discussions);
    };

    const handleChangeuser = (event) => {
        setName(event.target.value);
    }

    const handleChangetitle = (event) => {
        setTitle(event.target.value);
    }

    return (
        <div className={'question__container'}>
            <div className={'form__input--wrapper'}>
                <div className={'form__input--name'}>
                    <label htmlFor={'name'}>이름: </label>
                    <input type={'text'} id={'name'} onChange={handleChangeuser} required/>
                </div>
                <div className={'form__input--title'}>
                    <label htmlFor={'title'}>제목: </label>
                    <input type={'text'} id={'title'} onChange={handleChangetitle} required/>
                </div>
                <div className={'form__input--textbox'}>
                    <label htmlFor={'msg'}>질문: </label>
                    <textarea id={'msg'} name={'msg'} placeholder={'질문을 작성하세요'} required/>
                </div>
            </div>
            <div>
                <button className={'form__submitButton'} onClick={handleButtonClick}>제출</button>
            </div>
            <div className={'question__count'}>
                {`total : ${discussions.length}`}
            </div>
            <div className={'question__list--wrapper'}>
                <ul className={'questions'}>
                    {discussions.map((discussion) => {
                        return <Discussion discussion={discussion} key={discussion.id}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Questions;
