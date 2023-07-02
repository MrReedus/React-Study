import React from 'react';
import styles from './onOff.module.css'

type onOffPropsType = {
    on: boolean
}

const OnOff = (props: onOffPropsType) => {
    return (



    <div>
        {props.on && <button className={styles.buttonOn}>on</button>}
        {!props.on &&  <button className={styles.button}>off</button>}
        {props.on &&   <div className={styles.indicatorOn}></div>}
        {!props.on &&   <div className={styles.indicatorOff}></div>}

    </div>
)
    ;
};

export default OnOff;