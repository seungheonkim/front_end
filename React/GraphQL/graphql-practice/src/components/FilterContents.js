import React from "react";
import Discussion from "./Discussion";

const FilterContents = (props) => {
    const {filterContent} = props;

    return (
        <ul className={'discussions__container'}>
            {filterContent.map((nodes) => {
                return <Discussion
                    key={nodes.node.id}
                    discussion={nodes.node}
                />
            })}
        </ul>
    )
}

export default FilterContents;