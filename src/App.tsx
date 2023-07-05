import React from 'react';
import Accordeon from "./components/Accordeon";
import Rating from "./components/Rating";
import OnOff from "./components/onOff/onOff";
import Button from "./components/Button/Button";
import Cars from "./components/Cars/Cars";
import Filter from "./components/Filter/Filter";
import Input from "./components/Input/Input";
import MyInput from "./components/InputAndButton/MyInput";
import MyButton from "./components/InputAndButton/MyButton";


function App() {


    // const btn1Foo = (sub: string) => {
    //     console.log(sub)
    // }
    // const btn2Foo = (sub: string) => {
    //     console.log(sub)
    // }
    // const btn23Foo = () => {
    //     console.log('i am stupid button!!! :CCCC')
    // }
    //
    // const topCars = [
    //     {manufacturer:'BMW', model:'m5cs'},
    //     {manufacturer:'Mercedes', model:'e63s'},
    //     {manufacturer:'Audi', model:'rs6'}
    // ]

// let [number, setNumber]  = React.useState(1)
//     const incriment = () => {
//         console.log(number)
//         setNumber(++number)
//     }
//     const dicriment = () => {
//         console.log(number)
//         setNumber(--number)
//     }
//     const clearValue = () => {
//
//         setNumber(number = 0)
//     }

    const [messages, setMessages] = React.useState([
        {message: 'message 1'},
        {message: 'message 2'},
        {message: 'message 3'}
    ])

    let [title, setTitle] = React.useState('')


    const addMessage = (currentMessage: string) => {

        setMessages([{message: currentMessage}, ...messages])
        setTitle('')
    }

    return (
        <div className="App">
            {/*<Input addMessage={addMessage}/>*/}
            <MyInput setTitle={setTitle} title={title}/>
            <MyButton name={'Добавить'} callBack={() => {
                addMessage(title)
            }}/>
            <ul>
                {messages.map(m => (<li>{m.message}</li>))}
            </ul>




            <OnOff  />
            <OnOff  />
            <OnOff  />


            {/*<Filter/>*/}

            {/*<PageTitle title={'main page'}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Accordeon title={'Меню 1'} collapsed={false}/>*/}
            {/*<Accordeon title={"Меню 2"} collapsed={true}/>*/}

            {/*buttoins practic*/}

            {/*<Button name={"button 1"} callBack={() => btn1Foo('vasya')}/>*/}
            {/*<Button name={"button 2"} callBack={() => btn2Foo('IVAN')}/>*/}
            {/*<Button name={"button 2"} callBack={btn23Foo}/>*/}

            {/*UseState practic*/}

            {/*<h1 >{number}</h1>*/}
            {/*<button onClick={incriment} >+</button>*/}
            {/*<button onClick={dicriment} >-</button>*/}
            {/*<button onClick={clearValue} >0</button>*/}

            {/*<Cars topCars={topCars}/>*/}


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
