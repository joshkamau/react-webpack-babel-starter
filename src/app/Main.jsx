import React from "react";
import ReactDOM from "react-dom";
import User from "components/User.jsx";

class Main extends React.Component {

    render(){
        return (
            <div>
                <h1>It works</h1>
                <User firstName="Josh" lastName="Kamau"/>
            </div>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById("react-app"))
