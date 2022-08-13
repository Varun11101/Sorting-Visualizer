import React from 'react'
import './Visualizer.css'

export default function Visualizer({arr}) {
  return (
    <div className="arrayContainer">
      {arr.map((ele, idx) => {
        return <div className="arrayElement" key={idx} style={
            {
                height: `${ele}px`
            }
        }></div>;
      })}
    </div>
  );
}
