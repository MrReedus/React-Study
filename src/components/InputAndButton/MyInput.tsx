import React from 'react';


type InputPropsType = {
    setTitle: (title: string) => void
    title: string
}


const MyInput = (props: InputPropsType) => {
    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)

    }
    return (

        <div>
            <input value={props.title} onChange={onChangeInputHandler} type="text" name="" id=""/>
        </div>
    );
};

export default MyInput;