import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      picture: "",
      name: "",
      friends: [
        {
          name: "200 OK",
          picture: "https://http.cat/200"
        },
        {
          name: "400 NOT FOUND",
          picture: "https://http.cat/404"
        }
      ]
    };
  }
  handlePictureChange = e => {
    this.setState({ picture: e.target.value });
  };
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleAddFriendClick = () => {
    const { friends, picture, name } = this.state;

    // making a copy of the friends array so we dont mutate state
    let friendsCopy = friends.slice();

    // pushing a new Object to the copy array, the object
    // has two keys: name and picture
    friendsCopy.push({ name, picture });

    //
    this.setState({ friends: friendsCopy });
  };
  render() {
    return (
      <div className="container">
        <div>
          <label>Picture:</label>
          <input onChange={this.handlePictureChange} />
        </div>

        <div>
          <label>Name:</label>
          <input onChange={this.handleNameChange} />
        </div>
        <button onClick={this.handleAddFriendClick}>Add Friend</button>

        <div>
          {this.state.friends.map(friend => {
            return (
              <div>
                <h3>Name: {friend.name}</h3>
                <img src={friend.picture} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
