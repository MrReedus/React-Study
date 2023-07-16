import React from 'react';
import Accordeon from "./components/Accordeon";
import Rating, {ratingvalueType} from "./components/Rating";
import OnOff from "./components/onOff/onOff";
import Button from "./components/Button/Button";
import Cars from "./components/Cars/Cars";
import Filter from "./components/Filter/Filter";
import Input from "./components/Input/Input";
import MyInput from "./components/InputAndButton/MyInput";
import MyButton from "./components/InputAndButton/MyButton";
import UnControlledAccordeon from "./components/UnControlledAccordeon";
import UnControlledRating from "./components/unControlledRating";


function App() {

    const [messages, setMessages] = React.useState([
        {message: 'message 1'},
        {message: 'message 2'},
        {message: 'message 3'}
    ])


    let [title, setTitle] = React.useState('')
    let [ratingValue, setRatingValue] = React.useState<ratingvalueType>(4)
    let [accordeonCollapsed, setAccordeonCollapsed] = React.useState<boolean>(false)

    const addMessage = (currentMessage: string) => {

        setMessages([{message: currentMessage}, ...messages])
        setTitle('')
    }

    const accordeonShow = () => {
        setAccordeonCollapsed(!accordeonCollapsed)
    }

    let [on,setOn] = React.useState(false)


    // const toggler = (value: boolean) => {
    //     setOn(value)
    // }

    return (
        <div className="App">

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordeon title={'Меню 1'} collapsed={accordeonCollapsed} onClick={accordeonShow} />
            <OnOff toggler={setOn} on={on}/>
            <MyInput setTitle={setTitle} title={title}/>
            <MyButton name={'Добавить'} callBack={() => {
                addMessage(title)
            }}/>
            <ul>
                {messages.map(m => (<li>{m.message}</li>))}
            </ul>
        </div>
    );
}

export type pagePropsType = {
    title?: string
    name?: string
}

function PageTitle(props: pagePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
