import './App.css';
import Visualizer from './components/Visualizer'
import Heading from './components/Heading';
import { useEffect, useState } from 'react';
import {mergeSort} from './algorithms/merge-sort-algo'
import {bubbleSort} from './algorithms/bubble-sort-algo'
// var ii = 0;
const ANIMATION_SPEED = 100;
const MAX_VALUE = 300;
const project_title = "< SORTING VISUALIZER / >"
var recent_i = -1, recent_j = -1;
function App() {
  const [arr, changeArr] = useState([])
  const [size, changeSize] = useState(50)

  function c_swap(i, j, dup){
    // let dup = arr;
    dup[i] = dup[i] + dup[j];
    dup[j] = dup[i] - dup[j];
    dup[i] = dup[i] - dup[j];
  }

  function createAnimation(){
    
  }
  function bubble_sort() {
    const swapsArray = bubbleSort(arr);
    // console.log(swapsArray);
    let i;
    let dummyArr = [...arr];
    let len = swapsArray.length;
    for(i = 0; i < len; i++){
      let swaps = swapsArray[i];
      
      setTimeout(() => {
        const dup = [...dummyArr];
        recent_i = swaps[0];
        recent_j = swaps[1];
        c_swap(swaps[0], swaps[1], dup);
        // console.log(recent_i);
        changeArr(dup);
        dummyArr = dup;
      }, i*ANIMATION_SPEED);
    }
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
      let newEle = generateRandomElement(5, MAX_VALUE);
      newArr.push(newEle);
    }
    changeArr(newArr);
  }
  
  console.log(recent_i);
  return (
    <div className="App">
      <Heading project_title={project_title}></Heading>
      <Visualizer className="Viz" arr={arr} recent_i={recent_i} recent_j={recent_j}></Visualizer>
      <button onClick={generateArray}>Randomize Array</button>
      <button onClick={bubble_sort}>Bubble Sort</button>
      <button onClick={() => {changeArr(mergeSort(arr))}}>Merge Sort</button>
      <button onClick={quickSort}>Quick Sort</button>
      <button onClick={heapSort}>Heap Sort</button>
    </div>
  );
}

export default App;
