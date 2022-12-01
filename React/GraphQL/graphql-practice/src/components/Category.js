import React, {Fragment} from "react";

const Category = (props) => {
    const {handleClick, categories} = props;

    return (
        <Fragment>
            {!categories ? (
                <Fragment/>
            ) : (
                <div className={'category-wrapper'}>
                    {categories.edges.map((edge) => {
                        return (
                            <button
                                key={edge.node.id}
                                className={'category'}
                                onClick={handleClick}
                            >
                                {edge.node.name}
                            </button>
                        )
                    })}
                </div>
            )}
        </Fragment>
    )
};

export default Category;