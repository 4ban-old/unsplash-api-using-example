import React from "react";

const loadingStyle = {
  marginTop: "0.9em",
  textAlign: "center",
  fontSize: "18px",
};

class Loading extends React.Component {
  render() {
    return <div style={loadingStyle}>{this.props.text}</div>;
  }
}

Loading.defaultProps = {
  text: "Loading...",
};

export default Loading;
