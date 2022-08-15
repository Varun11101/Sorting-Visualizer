import './App.css';
import Visualizer from './components/Visualizer'
import Heading from './components/Heading';
import Stats from './components/Stats';
import Intro from './components/Intro';
import { useEffect, useState } from 'react';
import {mergeSort} from './algorithms/merge-sort-algo'
import {bubbleSort} from './algorithms/bubble-sort-algo'
import { selectionSort } from "./algorithms/selection-sort-algo";
import { quickSort } from "./algorithms/quick-sort-algo";

// var ii = 0;





const MIN_VALUE = 10;
const MAX_VALUE = 250;
const project_title = "< SORTING VISUALIZER / >"
const ARRAY_SIZE = 30;
// var left = -1, right = -1;
// var scount = 0;
let ANIMATION_SPEED = 200;
function App() {
  const [sortSpeed, setSortSpeed] = useState(ANIMATION_SPEED);
  const [arr, changeArr] = useState([])
  const [left, setLeft] = useState(-1)
  const [right, setRight] = useState(-1)
  const [mode, setMode] = useState(0)
  const [intro, introSet] = useState(true);
  const [arrSz, setArrSz] = useState(ARRAY_SIZE);
  

  const [scount, setScount] = useState(0);
  const [comps, setComps] = useState(0);
  
  //0 -> No animation, 1 -> Swapping animation, 2 -> Comparison animation

  function c_swap(i, j, dup){
    // let dup = arr;
    if(i === j) return;
    let len = dup.length;
    if(i < 0 || j < 0 || i >= len || j >= len) return;
    dup[i] = dup[i] + dup[j];
    dup[j] = dup[i] - dup[j];
    dup[i] = dup[i] - dup[j];
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  function createAnimation(swapsArray) {
    let i;
    let dummyArr = [...arr];
    let len = swapsArray.length;
    for(i = 0; i < len; i++){
      let swaps = swapsArray[i];
      
      setTimeout(() => {
        const dup = [...dummyArr];
        setLeft(swaps[0]);
        setRight(swaps[1]);
        setMode(swaps[2]);
        if(swaps[2] === 1){
          setScount((prev) => {
            return prev+1;
          });
        }
        if(swaps[2] === 2){
          setComps((prev) => {
            return prev+1;
          })
        }
        if(swaps[2] === 1) c_swap(swaps[0], swaps[1], dup);
        changeArr(dup);
        dummyArr = dup;
      }, i*ANIMATION_SPEED);
    }
    setTimeout(() => {
      setLeft(-1);
      setRight(-1);
      setMode(0);
      // ANIMATION_SPEED = 100;
    }, len * ANIMATION_SPEED);
  }

  function bubble_sort() {
    setScount(0);
    setComps(0);
    const swapsArray = bubbleSort(arr);
    createAnimation(swapsArray);
  }

  function selection_sort(){
    setScount(0);
    setComps(0);
    const swapsArray = selectionSort(arr);
    createAnimation(swapsArray);
  }

  
  function quick_sort(){
    setScount(0);
    setComps(0);
    const swapsArray = quickSort(arr);
    createAnimation(swapsArray);
  }

  function heapSort(){

  }

  function generateRandomElement(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateArray() {
    introSet(false);
    setScount(0);
    setComps(0);
    let newArr = []
    newArr.push(MAX_VALUE)
    for(let i = 0; i < arrSz-1; i++){
      let newEle = generateRandomElement(MIN_VALUE, MAX_VALUE);
      newArr.push(newEle);
    }
    shuffleArray(newArr);
    changeArr(newArr);
  }
  
  // console.log(left);
  console.log(ANIMATION_SPEED)
  console.log(arrSz);
  return (
    <div className="App">
      <Heading project_title={project_title}></Heading>

      {(!intro) && <div className="sliderComponent">
        <span className="slidecontainer">
          <span className="slideBarLabel">Speed: </span>
          <input
            onChange={(e) => {
              // console.log(e);
              ANIMATION_SPEED = 1100 - parseInt(e.target.value);
            }}
            type="range"
            min="1"
            max="1000"
            className="slider"
            id="myRange"
          />
        </span>

        <span className="slidecontainer">
          <span className="slideBarLabel">Size: </span>
          <input
            onChange={(e) => {
              // console.log(e);
              // ARRAY_SIZE = parseInt(e.target.value);
              setArrSz(parseInt(e.target.value));
              generateArray();
            }}
            type="range"
            min="3"
            max="30"
            className="slider"
            id="myRange"
          />
        </span>
      </div>}

      <button onClick={generateArray}>Randomize Array</button>
      <button onClick={bubble_sort}>Bubble Sort</button>
      <button onClick={selection_sort}>Selection Sort</button>
      <button onClick={quick_sort}>Quick Sort</button>
      <button
        onClick={() => {
          changeArr(mergeSort(arr));
        }}
      >
        Merge Sort
      </button>
      {intro && <Intro></Intro>}
      {/* <div>Swaps vro: {scount}</div> */}
      {!intro && <Stats comps={comps} scount={scount} sz={arrSz}></Stats>}
      <Visualizer
        arr={arr}
        left={left}
        right={right}
        mode={mode}
        intro={intro}
      ></Visualizer>
    </div>
  );
}

export default App;
