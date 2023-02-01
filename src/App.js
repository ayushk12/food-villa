
import React from "react";
import ReactDOM from "react-dom/client";
// Default import
import Header from './components/Header';

// Named import
import {Title} from "./components/Header"
import Body from './components/Body';
const App=()=>{
    return (
        <>
        
        <Header/>
        <Body />
        </>

    )
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);