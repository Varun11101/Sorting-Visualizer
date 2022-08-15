import React from 'react'

export default function Heading({project_title}) {
  const resetFunc = () => {
    window.location.reload();
  }
  return (
    <div className="heading">
        <h1 onClick={resetFunc}>
            {project_title}
        </h1>

    </div>
  )
}
