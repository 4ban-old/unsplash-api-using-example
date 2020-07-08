import React from "react";

const loadingStyle = {
  marginTop: "0.9em",
  textAlign: "center",
  fontSize: "18px",
};
const Loading = ({ text }) => {
  return <div style={loadingStyle}>{text}</div>;
};

Loading.defaultProps = {
  text: "Loading...",
};

export default Loading;
