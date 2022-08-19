import React from 'react'

const Sectiontitle = (props) => {
  return (
    <div className="heading text-center">
    {/* Heading */}
    <h2>{props.title}</h2>
    <p>{props.desc}</p>
  </div>
  )
}

export default Sectiontitle