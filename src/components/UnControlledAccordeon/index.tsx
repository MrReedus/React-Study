import React from 'react';
import {useState} from "react";


type UnControlledAccordeonPropsType = {
    title: string
}
const UnControlledAccordeon = (props: UnControlledAccordeonPropsType) => {

    let [collapsed, setCollapsed] = React.useState(false);


    return (
        <div>
            <AccordeonTitle title={props.title} onClick={() =>  setCollapsed(!collapsed)} collapsed={collapsed}/>
            {!collapsed && <AccordeonBody/>}
        </div>
    )


};

type AccordeonTitlePropsType = {
    title: string
    onClick: () => void
    collapsed: boolean
}


function AccordeonTitle(props: AccordeonTitlePropsType) {



    return <h3 style={{cursor: 'pointer'}}
               onClick={() => props.onClick()}
    >{props.title}</h3>
}

function AccordeonBody() {

    return (
        <ul style={{transition: '0.5s ease'}}>
            <li>-----------</li>
            <li>-----------</li>
            <li>-----------</li>
        </ul>
    )
}


export default UnControlledAccordeon;