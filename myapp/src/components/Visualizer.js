import React from 'react'
import './Visualizer.css'

export default function Visualizer({arr, left, right, mode, intro}) {
  return (
    <div className="arrayContainer">
      {(!intro) && <div className="dummyDiv"></div>}
      {arr.map((ele, idx) => {
        return idx === left || idx === right ? (
          mode === 1 ? (
            <div
              //Swapped box elements
              className="arrayElement"
              key={idx}
              style={{
                height: `${ele}px`,
                backgroundColor: "#2A0944",
                boxSizing: "border-box",
                border: "2px solid white",
              }}
            ></div>
          ) : mode === 3 ? (
            <div
              //Mode = 3 -> About to swap
              className="arrayElement"
              key={idx}
              style={{
                height: `${ele}px`,
                backgroundColor: "white",
                boxSizing: "border-box",
                border: "2px solid white",
              }}
            ></div>
          ) : (
            <div
              //Mode = 2 -> Comparison
              //Swapped box elements
              className="arrayElement"
              key={idx}
              style={{
                height: `${ele}px`,
                backgroundColor: "#FFF80A",
                boxSizing: "border-box",
                border: "2px solid white",
              }}
            ></div>
          )
        ) : (
          <div
            // Normal box elements
            className="arrayElement"
            key={idx}
            style={{
              height: `${ele}px`,
              backgroundColor: "#00FFAB",
              boxSizing: "border-box",
              border: "2px solid #0078AA",
            }}
          ></div>
        );
      })}

      {/* <div className="horizontalDummy"></div> */}
    </div>
  );
}
