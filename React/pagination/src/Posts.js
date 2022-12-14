import {useEffect, useState} from "react";
import {Pagination} from "./Pagination";

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    //첫 게시물의 위치
    const offset = (page - 1) * limit;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    const changeLimit = (event) => {
        setLimit(Number(event.target.value));
    }

    return (
        <section>
            <header>
                <h1>게시물 목록</h1>
            </header>

            <label>
                페이지 당 표시할 게시물 수:
                <select typeof={'number'} value={limit} onChange={changeLimit}>
                    <option value={'10'}>10</option>
                    <option value={'12'}>12</option>
                    <option value={'20'}>20</option>
                    <option value={'50'}>50</option>
                    <option value={'100'}>100</option>
                </select>
            </label>

            <main>
                {posts.slice(offset, offset + limit).map(({id, title, body}) => (
                    <article key={id}>
                        <h3>{id}. {title}</h3>
                        <p>{body}</p>
                    </article>
                ))}
            </main>

            <footer>
                <Pagination
                    total={posts.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}/>
            </footer>
        </section>
    )
}