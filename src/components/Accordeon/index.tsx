import React from 'react';
import { useState } from "react";


type AccordeonPropsType = {
    title: string,
    collapsed: boolean
}
const Accordeon = (props: AccordeonPropsType) => {


        return (
            <div>
                <AccordeonTitle title={props.title}/>
                { !props.collapsed && <AccordeonBody/>}

            </div>
        )




};

type AccordeonTitlePropsType = {
    title: string
}



function AccordeonTitle(props: AccordeonTitlePropsType) {
    return <h3>{props.title}</h3>
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