export function animateQuickSort(array) {
    let animation = [];
    if(array.length <= 1) return array;
    let copyArray = array.slice();
    quickSort(array, animation, copyArray);
    return animation;
}

function quickSort(array) {
    if( array.length <= 1) {
        return array;
    }
    let pivot = array.shift();
    let left = array.filter((el) => { return el < pivot });
    let right = array.filter((el) => { return el >= pivot });

    let sortLeft = quickSort(left);
    let sortRight = quickSort(right);
    return sortLeft.concat([pivot]).concat(sortRight);
}
