import React, {useState} from 'react';
import {callbackify} from "util";


type InputType = {
    addMessage: (m: string) => void
}

const Input = (props: InputType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }

    const onclickHandler = (m: string) => {
       props.addMessage(m)
        setTitle('')

    }


    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} type="text" name="" id=""/>
            <button onClick={() => onclickHandler(title)}>send</button>
        </div>
    );
};

export default Input;