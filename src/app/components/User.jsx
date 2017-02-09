import React from "react";

class User extends React.Component {

    render(){
        return (
            <div>
                First Name: {this.props.firstName}<br/>
                Last Name: {this.props.lastName}
            </div>
        )
    }
    
}

export default User;