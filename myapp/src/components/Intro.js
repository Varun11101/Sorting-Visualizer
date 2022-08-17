import React from 'react'
import './Intro.css'
import Footer from './Footer';

export default function Intro() {
  return (
    <div className="footerContent">
      <p className="getStarted">
        - Click on <span className="randomArr">Randomize Array</span> button to get started -
      </p>
      <hr></hr>
      <div className="about">ABOUT</div>
      <p className="aboutSection">
        <div className="contentPoint">
          - Sorting Visualizer is a web application that displays animated
          visuals of various sorting algorithms -
        </div>
        <div className="contentPoint">
          - Algorithms such as Bubble Sort, Selection Sort, Quick Sort and Merge
          Sort have been implemented -
        </div>
        <div className="contentPoint">
          - Slider bars are implemented to dynamically control the sorting speed
          and the size of the array data -
        </div>
        <div className="contentPoint">
          - Number of comparisons and swaps needed to sort the array for each
          algorithm is displayed on the web page -
        </div>
        <div className="contentPoint">
          - Technologies Used: ReactJS, CSS, Javascript -
        </div>
      </p>
      <Footer></Footer>
    </div>
  );
}
