import React from 'react'
import './Intro.css'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <hr></hr>
      <p>
        <span className="myName">
          Developed by <span className="varun">Varun Hegde</span>
        </span>
        <div className="splitterSpan">|</div>
        <span className="githubRepo">
          GitHub Repository -{" "}
          <a
            className="gLink"
            href="https://github.com/Varun11101/Sorting-Visualizer"
            target="_blank"
          >
            Link
          </a>{" "}
        </span>
      </p>
    </div>
  );
}
