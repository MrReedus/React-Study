import React from 'react';


type ButtonPropsType = {
    name: string
    callBack: () => void
}


const MyButton = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }


    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default MyButton;