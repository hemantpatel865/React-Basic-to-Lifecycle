import React from 'react';
import './CharComponent.css' ;

const CharComponent = (props) => {
    return(
        <div className='Charbox'>
            <p onClick={props.click}>{props.char} </p>
        </div>
    )
}

export default CharComponent;