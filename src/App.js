import './App.css';
import React from "react";
import Stars from "./components/Starts";

function App() {
    return (
        <>
            <div>0 stars:</div>
            <Stars count={0}/>
            <div>1 star:</div>
            <Stars count={1}/>
            <div>5 stars:</div>
            <Stars count={5}/>
            <div>6 stars:</div>
            <Stars count={6}/>
        </>
    );
}

export default App;
