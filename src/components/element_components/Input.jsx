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
  const {type, id, name, step, className, value, onChange, placeholder} = props
  return (
    <input type={type} id={id} name={name} step={step} required className={className} value={value} onChange={onChange} placeholder={placeholder}/>
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