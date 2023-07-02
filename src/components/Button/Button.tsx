import React from 'react';



type buttonType = {
    name: string
    callBack: ()=> void
}



const Button = ( props: buttonType) => {

    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button
                onClick={onClickHandler}
            >{props.name}</button>
        </div>
    );
};

export default Button;