import { useRouteError } from 'react-router-dom';

const Error =()=>{
    const err= useRouteError();
    return (
        <div>
            <h1>Oops!!</h1>
            <h2>Something went wrong</h2>
            <h3>{err?.status + " : " + err?.statusText}</h3>
            <h4>Take a break go for walk and come again .</h4>
        </div>
    )
}

export default Error;