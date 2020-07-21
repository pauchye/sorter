export function animateMergeSort(array) {
    let animation = [];
    // if(array.length <= 1) return array;
    let copyArray = array.slice();
    mergeSort(array, animation, 0, array.length-1,copyArray);
    return animation;
}

function mergeSort(array, animation, startInd, endInd, copyArray) {
    if(startInd === endInd) return;

    let midInd = Math.floor((startInd+endInd)/ 2);

    mergeSort(copyArray, animation, startInd, midInd, array)
    mergeSort(copyArray, animation, midInd+1, endInd, array)

    merge(array, animation, startInd, midInd, endInd, copyArray);
}

function merge(array, animation, startInd, midInd, endInd, copyArray) {

    let i = startInd;
    let i2 = startInd;
    let j = midInd+1;

    while (i <= midInd && j <= endInd){

        if (copyArray[i] <= copyArray[j]){

            animation.push({
                red: [i,j],
                gray: [i,j],
                height: [i2, copyArray[i]]
            })
            array[i2++] = copyArray[i++];
        } else {

            animation.push({
                red: [i,j],
                gray: [i,j],
                height: [i2, copyArray[j]]
            })
            array[i2++] = copyArray[j++];
        }

    }

    while (i <= midInd){
        animation.push({
            red: [i,i],
            gray: [i,i],
            height: [i2, copyArray[i]]
        })

        array[i2++] = copyArray[i++];

    }

    while (j <= endInd){
        animation.push({
            red: [j,j],
            gray: [j,j],
            height: [i2, copyArray[j]]
        })

        array[i2++] = copyArray[j++];

    }
  
}
