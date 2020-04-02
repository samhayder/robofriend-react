import React from 'react';

const Card = (props) => {
    return(
        <div className='dib bg-light-green tc br3 ma2 pa3 grow bw2 shadow-2'>
            <img src={`https://robohash.org/${props.id}?200x200`} alt="Robot Images"/>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}

export default Card;