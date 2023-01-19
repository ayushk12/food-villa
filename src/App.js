
import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';

const App=()=>{
    return (
        <>
        <Header/>
        </>

    )
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);