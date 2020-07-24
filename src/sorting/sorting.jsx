import React from 'react';
import './sorting.css'
import { animateMergeSort } from './merge'
import { animateQuickSort } from './quick'
import { animateBubbleSort } from './bubble'
const SCALE = 10;
const COLOR1 = 'rgb(218, 218, 218)';
const COLOR2 = 'red';

const animScale = 40;
const animIncrement = 10;

const arraySize = 25;

class Sorter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nums: []
        }
        this.createNums = this.createNums.bind(this);
        this.mergeSort = this.mergeSort.bind(this);
        this.quickSort = this.quickSort.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
    }

    createNums() {
        const data = [];
        // const data = new Set();
        // while (data.size < arraySize) {
        while (data.length < arraySize) {
            const next = Math.floor(1 + (Math.random() * 50));
            data.push(next)
            // data.add(next);
        }

        this.setState({nums: Array.from(data)});
    }

    mergeSort() {

        const animation = animateMergeSort(this.state.nums);

        let bars = document.getElementsByClassName('sort-bar');

        for (let i = 0; i < animation.length; i++) {

            let [red1, red2] = animation[i].red;
            let [gray1, gray2] = animation[i].gray;
            let [ind, newHeight] = animation[i].height;

            setTimeout(() => {
                bars[red1].style.backgroundColor = COLOR2;
                bars[red2].style.backgroundColor = COLOR2;
            }, i * animScale + animIncrement)
            setTimeout(() => {
                bars[gray1].style.backgroundColor = COLOR1;
                bars[gray2].style.backgroundColor = COLOR1;
            }, i * animScale + animIncrement * 2)
            setTimeout(() => {
                bars[ind].style.height = `${newHeight * SCALE}px`;
                bars[ind].textContent = `${newHeight}`;
            }, i * animScale + animIncrement * 3)

        }
    }

    quickSort(){
        const animation = animateQuickSort(this.state.nums).filter(anim => anim.from !== anim.to && anim.oldVal !== anim.newVal);
        console.log('animation', animation)
        let bars = document.getElementsByClassName('sort-bar');
        console.log('bars', bars)
        for (let i = 0; i < animation.length; i++) {
            let oldVal = animation[i].oldVal
            let newVal = animation[i].newVal
            let to = animation[i].to
            let from = animation[i].from
        
            setTimeout(() => {
                bars[to].style.backgroundColor = COLOR2;
                bars[from].style.backgroundColor = COLOR2;
            }, i * animScale + animIncrement)

            setTimeout(() => {
                bars[to].style.height = `${newVal * SCALE}px`;
                // bars[from].style.height = `${oldVal * SCALE}px`;
                // bars[from].textContent = `${oldVal}`;
                bars[to].textContent = `${newVal}`;
            }, i * animScale + animIncrement * 2)

            setTimeout(() => {
                bars[to].style.backgroundColor = COLOR1;
                bars[from].style.backgroundColor = COLOR1;
            }, i * animScale + animIncrement * 2)

        }

        // let bars = document.getElementsByClassName('sort-bar');
    }

    bubbleSort(){
        const animation = animateBubbleSort(this.state.nums);

        let bars = document.getElementsByClassName('sort-bar');
        console.log('bars', bars)
        for (let i = 0; i < animation.length; i++) {
            let oldVal = animation[i].oldVal
            let newVal = animation[i].newVal
            let to = animation[i].to
            let from = animation[i].from
        
            setTimeout(() => {
                bars[to].style.backgroundColor = COLOR2;
                bars[from].style.backgroundColor = COLOR2;
            }, i * animScale + animIncrement)

            setTimeout(() => {
                bars[to].style.height = `${oldVal * SCALE}px`;
                bars[from].style.height = `${newVal * SCALE}px`;
                bars[from].textContent = `${newVal}`;
                bars[to].textContent = `${oldVal}`;
            }, i * animScale + animIncrement * 2)

            setTimeout(() => {
                bars[to].style.backgroundColor = COLOR1;
                bars[from].style.backgroundColor = COLOR1;
            }, i * animScale + animIncrement * 2)

        }
    }

    componentDidMount(){
        this.createNums()
    }

    render() {
        
        return(
            <div className='body'>
                <div className='left'>
                    <div className='screen-left'>
                    {this.state.nums.map((num, id) => <div 
                            key={id}
                            className='sort-bar'
                            style={{
                                height: `${num * SCALE}px`,
                                backgroundColor: `${COLOR1}`
                            }}
                            data-value={num}
                    >{num}</div>)}
                    </div>
                    {/* <div className='bucket'>
                    {[...Array(arraySize).keys()].map((num, id) => <div 
                            key={id}
                            className='bucket-bar'
                            
                    >{num}</div>)}                        
                    </div> */}
                </div>
            
               <div className='screen-right'>
                   <h3>Sorting visualization</h3>
                    <div className='button' onClick={this.createNums}> Generate numbers</div>
                    <div className='button' onClick={this.mergeSort}> Merge Sort</div>
                    <div className='button' onClick={this.quickSort}> Quick Sort</div>
                    <div className='button' onClick={this.bubbleSort}> Bubble Sort</div>
                </div>
                
                
            </div>
        )      
    }

}

export default Sorter;


/*

14 7 22 6 3




*/