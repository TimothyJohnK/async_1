import React, { Component } from "react";

class Header extends Component {
  render() {
    return <header>Async experiments</header>;
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
