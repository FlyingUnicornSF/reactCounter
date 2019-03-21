/**
 * this file doesn't have any state. "functional component"
 * During making component process, I guess this is where we can set the size of thigns and name it properly so ppl can find it and use it.
 */
import React from 'react'

export const NumDisplay = props => (
  <div>
    <p id={props.id}  { ...props }>
      count: {props.children}
    </p>
  </div>
)

