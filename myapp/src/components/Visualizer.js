import React from 'react'
import './Visualizer.css'

export default function Visualizer({arr, recent_i, recent_j}) {
  return (
    <div className="arrayContainer">
      {arr.map((ele, idx) => {
        // return <div className="arrayElement" key={idx} style={
        //     {
        //         height: `${ele}px`
        //     }
        // }></div>;
        return idx == recent_i || idx == recent_j ? (
          <div
            //Swapped box elements
            className="arrayElement"
            key={idx}
            style={{
              height: `${ele}px`,
              backgroundColor: "#2A0944",
              boxSizing: "border-box",
              border: "2px solid #21E1E1"
            }}
          ></div>
        ) : (
          <div
            // Normal box elements
            className="arrayElement"
            key={idx}
            style={{
              height: `${ele}px`,
              backgroundColor: "#00FFAB",
              boxSizing: "border-box",
              border: "2px solid #0078AA"
            }}
          ></div>
        );
      })}
    </div>
  );
}
