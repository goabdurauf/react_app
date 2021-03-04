import React from 'react';
import ReactDOM from 'react-dom'

const App = () =>{
    return (
        <div className="hello">
            <h1>Hello react</h1>
            <div>hey</div>
        </div>
    )
}
ReactDOM.render(<App/>,document.querySelector("#root"));