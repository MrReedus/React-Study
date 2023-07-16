import React from 'react';
import {useState} from "react";


type AccordeonPropsType = {
    title: string,
    collapsed: boolean
    onClick: () => void
}
const Accordeon = (props: AccordeonPropsType) => {

    return (
        <div>
            <AccordeonTitle title={props.title} onClick={props.onClick}/>
            {!props.collapsed && <AccordeonBody/>}

        </div>
    )


};

type AccordeonTitlePropsType = {
    title: string
    onClick: () => void
}


function AccordeonTitle(props: AccordeonTitlePropsType) {

    const onClickHandler = () => {
        props.onClick()
    }

    return <h3
        onClick={onClickHandler}
    >{props.title}</h3>
}

function AccordeonBody() {

    return (
        <ul>
            <li>-----------</li>
            <li>-----------</li>
            <li>-----------</li>
        </ul>
    )
}


export default Accordeon;