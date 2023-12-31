import React from 'react';
import styles from './onOff.module.css'

type onOffPropsType = {
    on: boolean
    toggler: (value: boolean) => void
}


const OnOff = (props : onOffPropsType) => {

    const onStyle = {
        width: '30px ',
        height: '20px',
        padding: '5px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.on ? 'green' : 'white',
        cursor: 'pointer',
        transition: '0.3s ease'

    }
    const offStyle = {
        width: '30px ',
        height: '20px',
        padding: '5px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.on  ? 'white' : 'red',
        cursor: 'pointer',
        transition: '0.3s ease'
    }
    const indicatorStyle = {
        width: '20px ',
        height: '20px',
        borderRadius: '100%',
        border: '1px solid black',
        alignSelf: 'center',
        backgroundColor: props.on  ? 'green' : 'red',
        transition: '0.3s ease-in'

    }

    const callBack = (value: boolean) => {
        props.toggler(value)
    }
    return (


        <div style={{display: 'flex', columnGap: '10px', marginBottom: '12px'}}>
            <div style={onStyle}
                 onClick={() => callBack(true)}
            >on
            </div>
            <div
                style={offStyle}
                onClick={() => callBack(false)}
            >off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
        ;
};

export default OnOff;