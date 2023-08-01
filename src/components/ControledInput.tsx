import React, {useState} from 'react';

const ControledInput = () => {

    const [value, setValue] = useState('')
    return (
        <div>
            <input type="text" onChange={(e) => setValue(e.currentTarget.value)} value={value}/>
            <button >save</button>
            <h1>result: {value} </h1>
        </div>
    );
};

export default ControledInput;