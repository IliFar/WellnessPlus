import React from 'react'

const Input = (props) => {
  return (
    <input type={props.type} id={props.id} name={props.name} step={props.step} required className={props.className} value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
  )
}

export default Input