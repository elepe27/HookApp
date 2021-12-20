import React, { useCallback, useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import { Showincrement } from "./Showincrement";

export const CallbackHook = () => {


    const [counter, setcounter] = useState(10)

    // const increment = ()=>{
        
    //     setcounter(counter + 1);
    // };

    const increment = useCallback( (num)=> {
        setcounter(c =>  c + num);
    },[setcounter]);



    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>

            <Showincrement  increment={increment}/>

        </div>
    )
}
