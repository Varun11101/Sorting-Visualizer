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
                backgroundColor: "#FFE268",
                boxSizing: "border-box",
                borderRight: "10px solid #FC5404",
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
                borderRight: "10px solid white",
              }}
            ></div>
          ) : (
            <div
              //#FFF56D #FFB72B
              //Mode = 2 -> Comparison
              //Swapped box elements
              className="arrayElement"
              key={idx}
              style={{
                height: `${ele}px`,
                backgroundColor: "#FFF56D",
                boxSizing: "border-box",
                borderRight: "10px solid #FFB72B",
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
              borderRight: "10px solid #0078AA",
            }}
          ></div>
        );
      })}

      {/* <div className="horizontalDummy"></div> */}
    </div>
  );
}
