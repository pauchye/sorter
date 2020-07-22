import React from 'react';
import './sorting.css'
import { animateMergeSort } from './merge'
import { animateQuickSort } from './quick'
const SCALE = 16;
const COLOR1 = 'gray';
const COLOR2 = 'red';

class Sorter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nums: []
        }
        this.createNums = this.createNums.bind(this);
        this.mergeSort = this.mergeSort.bind(this);
        this.quickSort = this.quickSort.bind(this);
    }

    createNums() {
        let arr = [];
        for (let i = 0; i < 26; i++) {
            arr.push(Math.floor(Math.random() * Math.floor(30)))
        }
        this.setState({nums: arr});
        
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
            }, i*40+10)
            setTimeout(() => {
                bars[gray1].style.backgroundColor = COLOR1;
                bars[gray2].style.backgroundColor = COLOR1;
            }, i*40+20)
            setTimeout(() => {
                bars[ind].style.height = `${newHeight * SCALE}px`;
                bars[ind].textContent = `${newHeight}`;
            }, i*40+30)

        }
    }

    quickSort(){
        const animation = animateQuickSort(this.state.nums);
        console.log('animation', animation)
        for (let i = 0; i < animation.length; i++) {

            setTimeout(() => {
                // bars[red1].style.backgroundColor = COLOR2;
                // bars[red2].style.backgroundColor = COLOR2;
            }, i*40+10)

        }

        // let bars = document.getElementsByClassName('sort-bar');
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
                    <div className='bucket'>
                    {[...Array(26).keys()].map((num, id) => <div 
                            key={id}
                            className='bucket-bar'
                            
                    >{num}</div>)}                        
                    </div>
                </div>
            
               <div className='screen-right'>
                    <div className='button' onClick={this.createNums}> Generate numbers</div>
                    <div className='button' onClick={this.mergeSort}> Merge Sort</div>
                    <div className='button' onClick={this.quickSort}> Quick Sort</div>
                </div>
                
                
            </div>
        )      
    }

}

export default Sorter;