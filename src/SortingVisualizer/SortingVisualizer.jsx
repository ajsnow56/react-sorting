import React from "react";
import "./SortingVisualizer.css";
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms';


export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array:[],
        };
    }
    componentDidMount() {
        this.resetArray();
    }

    resetArray(){
    const array = [];
    for (let i = 0; i<200; i++) {
        array.push(randomIntFromInterval(5, 800));
    }
    this.setState({array});
}

    mergeSort() {}

    quicksort() {}

    heapSort() {}

    bubbleSort() {}


    render() {
        const {array} = this.state;

        return(
        <div className="array-container">
        {array.map((value, idx) => (
            <div 
            className="array-bar" 
            key={idx}
            style={{height: `${value}px`}}>
             </div>
        ))}
        <button onClick={() => this.resetArray()} > Generate New Array</button>
        <button onClick={() => this.mergeSort()} > Merge Sort</button>
        <button onClick={() => this.quicksort()} > Quick Sort</button>
        <button onClick={() => this.heapSort()} > Heap Sort</button>
        <button onClick={() => this.bubbleSort()} >Bubble New Sort</button>
        </div>
        );
    }
}
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max-min + 1)+ min);
}