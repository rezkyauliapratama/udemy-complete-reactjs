import React from 'react'
//new component to check the validation length input string
const validation = (props) => {
    let warningMessage = 'Text long enough';
    if (props.inputLength < 5){
        warningMessage = 'Text too short';
    }
    return (
        <div>
            <p>{warningMessage}</p>
        </div>
        
    );
}

export default validation;