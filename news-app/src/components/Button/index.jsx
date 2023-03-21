import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { handleClick, children } = props;
  const buttonStyle = {
    width: "100px",
    height: "50px",
    color: "white",
    backgroundColor: "darkgrey",
    border: "none",
    borderRadius: "20px",
  };
  return (
    <button onClick={handleClick} style={buttonStyle}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element,
  handleClick: PropTypes.func,
};

export default Button;
