import React from 'react';
import {useState} from "react";


type AccordeonPropsType = {
    title: string,
    collapsed: boolean
    onClick: () => void
    items: string[]
}
const Accordeon = (props: AccordeonPropsType) => {

    return (
        <div>
            <AccordeonTitle title={props.title} onClick={props.onClick}/>
            {!props.collapsed && <AccordeonBody items={props.items}/>}
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

type AccordeonBodyPropsType = {

    items: string[]
}

function AccordeonBody({items} :AccordeonBodyPropsType  ) {


    return (
        <ul>
            {items.map((item,index) =>  <li key={index}>{item}</li>   )}
        </ul>
    )
}


export default Accordeon;