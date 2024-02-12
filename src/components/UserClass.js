import React, { Component } from "react";
import { render } from "react-dom";

// class based component
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      useInfo: {
        name: "Dummy",
        twitter_username: "Default",
      },
    };

    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
    // Api call

    const data = await fetch("https://api.github.com/users/YashRuikar");
    const json = await data.json();

    this.setState({
      useInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + "Child Render");

    const { name, twitter_username, avatar_url} = this.state.useInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>twitter_username: {twitter_username}</h3>
        <h4>Contact: @yashruikar</h4>
      </div>
    );
  }
}

export default UserClass;


//  ---- Mounting ----

// Constructor (dummy)
// render (dummy)
//       <HTML Dummy>
// Component Did Mount
//       <API Call>
//       <this.setState> => State variable is updated


//  ---- Update ----