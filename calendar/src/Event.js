import React from 'react'

function Event(props) {
  return (
    <div>
      <p>{props.e.location}</p>
      <p>{props.e.title}</p>
    </div>
  )
}

export default Event
