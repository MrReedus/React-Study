import React from 'react';

type ratingPropsType = {
    value: 0 | 1 | 2| 3 | 4 | 5
}


function Rating(props: ratingPropsType) {


        return (
            <div>
                <Star selected={ props.value > 0}/>
                <Star selected={ props.value > 1}/>
                <Star selected={ props.value > 2}/>
                <Star selected={ props.value > 3}/>
                <Star selected={ props.value > 4}/>

            </div>
        );


}

type starPropsType = {
    selected: true | false
}
function Star(props: starPropsType) {
    if (props.selected) {
        return <span><b> Star</b></span>
    } else {
        return <span> Star</span>
    }
}

export default Rating;



