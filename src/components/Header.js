import React from "react";

const headerStyle = {
  borderBottom: "2px solid black",
  margin: "0.9em 0 2em 0",
};

class Header extends React.Component {
  render() {
    return (
      <div style={headerStyle}>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

Header.defaultProps = {
  text: "I'm a default prop",
};

export default Header;
