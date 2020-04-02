import React from 'react';

const Scroll = (props) => {
    return(
        <div style={ {border:'1px solid', overflowY: 'scroll', height: '80vh'} }>
            {props.children}
        </div>
    )
};

export default Scroll;