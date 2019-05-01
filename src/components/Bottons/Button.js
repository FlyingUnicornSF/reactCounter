import React from 'react'

export const Button = props => (
  <button type="button" className='btn' { ...props }>
    {props.value}! { props.children } {props.tag} {props.text}
  </button>
)