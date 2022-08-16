//DOCS

/*
Name : Button
Use : Anywhere
How : 
  1) import the component in another component
  2) add the values to the props you need... example : <Button class={value} />

Edit : You can add other props to this component as you need, just write the attribute followed by ={props.youNameIt}
*/ 

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