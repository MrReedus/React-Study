import React from 'react';

export type ratingvalueType = 0 | 1 | 2 | 3 | 4 | 5;

type ratingPropsType = {
    value: ratingvalueType
    onClick: (value: ratingvalueType) => void
}


function Rating(props: ratingPropsType) {


    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>

        </div>
    );


}

type starPropsType = {
    selected: boolean
    onClick: (value: ratingvalueType) => void
    value: ratingvalueType
}

function Star(props: starPropsType) {

    return <span style={{cursor: 'pointer'}} onClick={() => {
        props.onClick(props.value)
    }}>
        {(props.selected) ? <b>star </b> : ' star'}
    </span>

}

export default Rating;



