import React from "react";
import FilterContents from "./FilterContents";

const Discussions = (props) => {
    const {filterText, filterContent, discussions} = props;

    return (
        <section className={'discussion__wrapper'}>
            {filterContent.length !== 0 ? (
                <FilterContents filterContent={filterContent}/>
            ) : (
                <></>
            )}
        </section>
    )
}

export default Discussions;