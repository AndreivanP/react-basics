import React from "react";
import PropTypes from 'prop-types'

export class Home extends React.Component {
    render() {
        var text = "Something!";
        return (
            <div>
                <p>In a new Component!</p>
                <p>{text}</p>
                {5 == 5 ? "Yes" : "No"}
        <p>Your name is {this.props.name}, your age is {this.props.age} and your height is {this.props.height}</p>
                <p>User Object => Name: {this.props.name}</p>
                <div>
                <h4>{this.props.user.name}'s Hobbies:</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                    {this.props.children}               
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};