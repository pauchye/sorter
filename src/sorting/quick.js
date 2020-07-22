export function animateQuickSort(array) {
    let animation = [];
    if(array.length <= 1) return array;
    // let newArray = array.map((el, id) => { [el, id]})
    // let copyArray = array.slice();
    quickSort(array, 0, array.length, animation);
    return animation;
}

function quickSort(array, startInd, endInd, animation) {
    // if( array.length <= 1) {
    //     return array;
    // }
    if(endInd - startInd <= 1) return;
    // let pivot = array.shift();
    // let left = array.filter((el) => { return el < pivot });
    // let right = array.filter((el) => { return el >= pivot });
    // animation.push({
    //     pivot
    // })
    // console.log('array', array)

    let pivot = array[startInd];
    
    // let pivotInd = startInd
    // animation.push([pivotInd]);
    let left = [];
    let right = [];

    for(let i = startInd+1; i < endInd; i++){
        const elem = { num: array[i], idx: i};
        const receive = pivot > array[i] ? left : right;
        receive.push(elem);
    }
    
    console.log('left', left, 'pivot', pivot, 'right', right)

    let idx = startInd;
    for ( let elem of left ) {
        let oldVal = array[idx];
        array[idx] = elem.num;
        animation.push({from: elem.idx, to: idx, oldVal: oldVal, newVal: elem.num});
        idx++;
    }
    array[idx++] = pivot;
    for ( let elem of right ) {
        let oldVal = array[idx];
        array[idx] = elem.num;
        animation.push({from: elem.idx, to: idx, oldVal: oldVal, newVal: elem.num});
        idx++;
    }
    console.log(animation);

    let leftSorted = quickSort(array, startInd, startInd + left.length, animation);
    let rightSorted = quickSort(array, startInd + left.length + 1, endInd, animation);

    // let otherLeft = array.slice(0, startInd);
    // let otherRight = array.slice(endInd);
    // console.log('otherLeft', otherLeft)
    // console.log('otherRight', otherRight)
    


    // array = [...otherLeft, ...left, pivot, ...right, ...otherRight];
    console.log('array', array)
    // console.log('startInd', startInd)
    // console.log('left.length-1', left.length-1)
    // console.log('left.length+2', left.length+2)
    // console.log('endInd', endInd)
    // let leftSorted = quickSort(array, startInd, left.length-1, animation);
    // let rightSorted = quickSort(array, left.length+2, endInd, animation);
    // return [ ...leftSorted, pivot, ...rightSorted ];
}



