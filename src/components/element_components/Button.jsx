import React from 'react'
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button className={props.class} type={props.type} onClick={props.onClick}>{props.children}</button>
  )
}

Button.propTypes = {
  class: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string
}

export default Button