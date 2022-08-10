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