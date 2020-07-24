export function animateBubbleSort(array) {
    let animation = [];
    if(array.length <= 1) return array;
    // let newArray = array.map((el, id) => { [el, id]})
    // let copyArray = array.slice();
    bubbleSort(array, defaultCallback, animation);
    return animation;
}

function defaultCallback(num1, num2) {
    if (num1 < num2) {
      return -1;
    } else if (num1 === num2) {
      return 0;
    } else {
      return 1;
    }
};

function bubbleSort (array, callback, animation) {
    let sorted = false;
    while (!sorted) {
      sorted = true;
      for (let i = 1, n = array.length; i < n; i++) {
        if (callback(array[i - 1], array[i]) === 1) {
          animation.push({from: i-1, to: i, oldVal: array[i - 1], newVal: array[i]});  

          sorted = false;
          let swap = array[i - 1];
          array[i - 1] = array[i];
          array[i] = swap;
        }
      }
    }
    console.log('array', array)
    return array;
};