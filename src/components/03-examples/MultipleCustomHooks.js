import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {


    const {counter, increment} =  useCounter(1);
    
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    

    const { loading, data } = state;

    const { author, quote } = !!data && data[0]

    



    return (
        <>
            <div>
                <h1> BreakingBad Quotes</h1>
                <hr />

                {loading ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>

                    )

                    :

                    (
                        <div className='float-end'>
                            <blockquote className='blockquote'>
                                <p>{quote}</p>
                            </blockquote>
                            <footer className='blockquote-footer'>
                                <cite title="Source Title">{author}</cite>
                            </footer>

                        </div>
                    )
                }

            </div>
            <br/>
            <br/>
            {
                !loading && <button className='btn btn-primary' onClick={increment}>Siguiente frase</button>
            }
        </>
    )
}
