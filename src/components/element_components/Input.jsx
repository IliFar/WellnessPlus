//DOCS

/*
Name : Input
Use : Anywhere
How : 
  1) import the component in another component
  2) add the values to the props you need... example : <Input className={value} />

Edit : You can add other props to this component as you need, just write the attribute followed by ={props.youNameIt}
*/ 


import React from 'react'
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input type={props.type} id={props.id} name={props.name} step={props.step} required className={props.className} value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  step: PropTypes.number,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default Input