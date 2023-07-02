import React from 'react';
import button from "../Button/Button";


type FilterType = 'All' | 'ruble' |  'dollars'

const Filter = () => {

    const [money, setMoney] = React.useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = React.useState('all')

     let currentMoney  = money;
    if (filter === 'ruble') {
         currentMoney = money.filter(m => m.banknots === 'RUBLS')
    }
     if (filter === 'dollars') {
        currentMoney = money.filter(m => m.banknots === 'Dollars')
     }



    const onClickFilterHandler = (nameFilter: FilterType) => {
        setFilter(nameFilter)
        console.log(filter)
    }


    return (
        <div>


            <ul>
                {currentMoney.map((m, i) => {
                    return (
                        <li key={i}><b>Валюта: {m.banknots}</b><span> Сумма: {m.value}</span> <i>Номер: {m.number}</i>
                        </li>
                    )
                })}
            </ul>
            <div style={{
                display: 'flex',
                gap: '10px'
            }}>
                <button onClick={() => {
                    onClickFilterHandler('ruble')
                }}> ruble</button>
                <button onClick={() => {
                    onClickFilterHandler('dollars')
                }}> dollars</button>
                <button onClick={() => {
                    onClickFilterHandler('All')
                }}> all</button>
            </div>

        </div>
    );
};

export default Filter;