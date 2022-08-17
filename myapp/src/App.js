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
import Footer from './components/Footer';

const MIN_VALUE = 10;
const MAX_VALUE = 250;
const project_title = "< SORTING VISUALIZER / >"
const ARRAY_SIZE = 15;

let ANIMATION_SPEED = 200;
let arrSz = ARRAY_SIZE;

function App() {
  const [arr, changeArr] = useState([])
  const [left, setLeft] = useState(-1)
  const [right, setRight] = useState(-1)
  const [mode, setMode] = useState(0)
  const [intro, introSet] = useState(true);
  const [scount, setScount] = useState(0);
  const [comps, setComps] = useState(0);
  
  //0 -> No animation, 1 -> Swapping animation, 2 -> Comparison animation

  function c_swap(i, j, dup){
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
      enableButtons();
      for(let k = 0; k < arr.length; k++) {
        setTimeout(() => {
          const domElement = document.getElementsByClassName("arrayElement")[k];
          if(domElement !== undefined)document.getElementsByClassName('arrayElement')[k].style.backgroundColor = "#FBFF00";
          if(domElement !== undefined)document.getElementsByClassName('arrayElement')[k].style.borderRight = "10px solid #FF9300";
        }, k*20);
      }
      // ANIMATION_SPEED = 100;
    }, len * ANIMATION_SPEED);
  }

  function disableButtons(){
    const disabledArr = document.getElementsByClassName('disableWhileSorting');
    for(let k = 0; k < disabledArr.length; k++){
      disabledArr[k].classList.add("pure-button");
      disabledArr[k].classList.add("pure-button-disabled");
    }
  }

  function enableButtons(){
    const disabledArr = document.getElementsByClassName('disableWhileSorting');
    for(let k = 0; k < disabledArr.length; k++){
      disabledArr[k].classList.remove("pure-button");
      disabledArr[k].classList.remove("pure-button-disabled");
    }
  }
  
  function bubble_sort() {
    disableButtons();
    setScount(0);
    setComps(0);
    const swapsArray = bubbleSort(arr);
    createAnimation(swapsArray);
  }

  function selection_sort(){
    disableButtons();
    setScount(0);
    setComps(0);
    const swapsArray = selectionSort(arr);
    createAnimation(swapsArray);
  }

  
  function quick_sort(){
    disableButtons();
    setScount(0);
    setComps(0);
    const swapsArray = quickSort(arr);
    createAnimation(swapsArray);
  }

  function merge_sort(){
    if(!intro) disableButtons();
    setScount(0);
    setComps(0);
    const swapsArray = mergeSort(arr);
    createAnimation(swapsArray);
  }

  function generateRandomElement(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateArray() {
    introSet(false);
    setScount(0);
    setComps(0);
    for(let k = 0; k < arr.length; k++) {
      setTimeout(() => {
        const domElement = document.getElementsByClassName('arrayElement')[k];
        if(domElement !== undefined)document.getElementsByClassName('arrayElement')[k].style.backgroundColor = "#00FFAB";
        if(domElement !== undefined)document.getElementsByClassName('arrayElement')[k].style.borderRight = "10px solid #0078AA";
      }, k*20);
    }
    let newArr = []
    newArr.push(MAX_VALUE)
    for(let i = 0; i < arrSz-1; i++){
      let newEle = generateRandomElement(MIN_VALUE, MAX_VALUE);
      newArr.push(newEle);
    }
    shuffleArray(newArr);
    changeArr(newArr);
  }
  

  return (
    <div className="App">
      <Heading project_title={project_title}></Heading>

      {!intro && (
        <div className="sliderComponent">
          <span className="slidecontainer">
            <span className="slideBarLabel">Speed: </span>
            <input
              onChange={(e) => {
                // console.log(e);
                ANIMATION_SPEED = 1090 - parseInt(e.target.value);
              }}
              type="range"
              min="1"
              max="1000"
              className="slider disableWhileSorting"
              id="myRange"
            />
          </span>

          <span className="slidecontainer">
            <span className="slideBarLabel">Size: </span>
            <input
              onChange={(e) => {
                arrSz = parseInt(e.target.value);
                generateArray();
              }}
              type="range"
              min="3"
              max="30"
              className="slider disableWhileSorting"
              id="myRange"
            />
          </span>
        </div>
      )}

      <div className="mainButtons">
        <button className="disableWhileSorting" onClick={generateArray}>
          Randomize Array
        </button>
        <button className="disableWhileSorting" onClick={bubble_sort}>
          Bubble Sort
        </button>
        <button className="disableWhileSorting" onClick={selection_sort}>
          Selection Sort
        </button>
        <button className="disableWhileSorting" onClick={quick_sort}>
          Quick Sort
        </button>
        <button className="disableWhileSorting" onClick={merge_sort}>
          Merge Sort
        </button>
      </div>
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
      {
        (!intro) && <Footer></Footer>
      }
    </div>
    
  );
}

export default App;
