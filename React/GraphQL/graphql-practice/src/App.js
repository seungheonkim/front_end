import {Fragment, useEffect, useState} from "react";
import getRepository from "./getRepository";
import Header from "./components/Header";
import Category from "./components/Category";
import Discussions from "./components/Discussions";
import {Loading} from "./components/Loading";

const App = () => {
    const [discussionObj, setDiscussionObj] = useState({});
    const {discussionCategories, discussions} = discussionObj;
    const [viewer, setViewer] = useState({});
    let [filterText, setFilterText] = useState('React');
    let filterContent = '';

    useEffect(() => {
        getRepository()
            .then((data) => {
                if (data) {
                    setDiscussionObj(data.repository);
                    setViewer(data.viewer);
                    console.log(data.repository);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const handleCategoryClick = (e) => {
        setFilterText(e.target.textContent);
    };

    if(discussions) {
        filterContent = discussions.edges.filter((edge) => {
            return edge.node.category.name === filterText
        })
    }

    return (
        <Fragment>
            <main>
                {discussions !== undefined ? (
                    <Fragment>
                        <Header viewer={viewer}/>
                        <div className={'main-wrapper'}>
                            <Category
                                handleClick={handleCategoryClick}
                                categories={discussionCategories}
                            />
                            <Discussions
                                filterText={filterText}
                                filterContent={filterContent}
                                discussions={discussions}
                            />
                        </div>
                    </Fragment>
                ) : (
                    <Loading/>
                )}
            </main>
        </Fragment>
    )
}


export default App;
