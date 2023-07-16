import React, {useState} from 'react';


type ratingPropsType = {

}


function UnControledRating(props: ratingPropsType) {

    let [value, setValue] = useState(0)


    const addStarCallBack = (currentValue: number) => {
        setValue(currentValue)
    }


    return (
        <div>
            <Star selected={value > 0} addStarCallBack={() => addStarCallBack(1)} />
            <Star selected={value > 1} addStarCallBack={() => addStarCallBack(2)} />
            <Star selected={value > 2} addStarCallBack={() => addStarCallBack(3)} />
            <Star selected={value > 3} addStarCallBack={() => addStarCallBack(4)} />
            <Star selected={value > 4} addStarCallBack={() => addStarCallBack(5)} />

            {/*прокидываем значения 1 2 3 4 5 в компонент Star далее при клике вызываем функцию с эти значением?*/}

        </div>
    );


}

type starPropsType = {
    selected: boolean
    // value: 1 | 2 | 3 | 4 | 5
    addStarCallBack: () => void
}

function Star(props: starPropsType) {

    const onClickHandler = () =>{
        props.addStarCallBack()
    }

    return <span onClick={onClickHandler} style={{cursor: 'pointer'}}>{(props.selected) ? <b> star</b> : ' star' }</span>

}

export default UnControledRating;



