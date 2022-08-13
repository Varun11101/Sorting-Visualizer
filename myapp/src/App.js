import './App.css';
import Visualizer from './components/Visualizer'
import { useState } from 'react';
function App() {
  const [arr, changeArr] = useState([])
  const [size, changeSize] = useState(50)


  // Sorting Algorithms
  function bubbleSort(){

  }

  function mergeSort(){

  }

  function quickSort(){

  }

  function heapSort(){

  }

  function generateRandomElement(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateArray() {
    let newArr = []
    for(let i = 0; i < size; i++){
      let newEle = generateRandomElement(5, 200);
      newArr.push(newEle);
    }
    changeArr(newArr);
  }
  
  return (
    <div className="App">
      <Visualizer arr={arr}></Visualizer>
      <button onClick={generateArray}>Generate new array</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      <button onClick={mergeSort}>Merge Sort</button>
      <button onClick={quickSort}>Quick Sort</button>
      <button onClick={heapSort}>Heap Sort</button>
    </div>
  );
}

export default App;
