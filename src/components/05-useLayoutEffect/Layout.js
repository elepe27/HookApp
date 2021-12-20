import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {


    const { counter, increment } = useCounter(1);

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);


    const { data } = state;

    const {  quote } = !!data && data[0];

    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({})


    useLayoutEffect(()=>{
        setBoxSize(pTag.current.getBoundingClientRect());
    },[quote]);


    return (
        <>
            <div>
                <h1> LayoutEffect</h1>
                <hr />

                <div>
                    <blockquote className='blockquote'>
                        <p 
                        ref={pTag}
                        >{quote}</p>
                    </blockquote>

                    <pre>
                        {JSON.stringify(boxSize,null,3)}
                    </pre>
                   

                </div>

            </div>
            <br />
            <br />
            
             <button className='btn btn-primary' onClick={increment}>Siguiente frase</button>
            
        </>
    )
}
