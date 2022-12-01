import './App.css';
import {graphql} from "@octokit/graphql";
import {Fragment, useEffect, useState} from "react";

const App = () => {
    const [data, setData] = useState();
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const GHP_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

    console.log(GHP_TOKEN);

    async function repo() {
        const {repository, viewer} = await graphql({
            headers: {
                authorization: `token ${GHP_TOKEN}`,
            },
            owner: "codestates-seb",
            name: "agora-states-fe",
            num: 5,
            query: `query repository($owner: String!, $name: String!, $num: Int!) {
        repository(name: $name, owner: $owner) {
          discussions(first: $num) {
            edges {
              node {
                category {
                  name
                }
                author {
                  login
                  avatarUrl
                }
                createdAt
                title
                id
                url
                answer {
                  author {
                    login
                    avatarUrl
                  }
                  bodyHTML
                  createdAt
                  id
                }
              }
            }
          }
        },
        viewer {
          login
          name
          avatarUrl
          email
          location
          createdAt
          bio
          websiteUrl
        }
      }`,
        },);

        return {repository, viewer};
    }

    useEffect(() => {
        repo()
            .then(res => {
                setData(res.repository.discussions.edges);
                setIsLoading(false);
                setUser(res.viewer);
                // console.log(res.viewer);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className={'App'}>
            {user ? (
                <Fragment>
                    <p>Login!</p>
                    <img src={user.avatarUrl} alt={''}/>
                    <p>{user.login}</p>
                    <p>{user.name}</p>
                    <p>{user.location}</p>
                    <p>{user.email}</p>
                    <p>{user.createdAt}</p>
                    <p>{user.bio}</p>
                    <a href={user.websiteUrl}>My Notion</a>
                </Fragment>
            ) : <p>No user Info!</p>}
            {isLoading ? <p>...Loading</p> : data.map((el, idx) => {
                return (
                    <li key={idx}>
                        <img src={el.node.author.avatarUrl} alt={''}/>
                        <a href={el.node.url}>{el.node.title}</a>
                        <span>{el.node.author.login}</span>
                    </li>
                )
            })}
        </div>
    )
}


export default App;
