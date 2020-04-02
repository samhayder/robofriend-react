import React from 'react';

const SearchBox = ({searchField,searchChange}) => {
    return(
        <div className="mb2">
            <input 
                className="ba b--green pa3 bg-lightest-blue tc"
                type="search" 
                placeholder="Search RoboFriend"
                onChange={searchChange}
            />
        </div>
    )
};

export default SearchBox;