
//bubbleSort lets you take an array of integers and sort them numberically.
var arr = [3,1,7,2,2,9];

function bubbleSort(arr) {
    var sortedArr = [];
    return sortedArr;
}

function bubbleSort(arr) {
    for(var i=0; i<arr.length; i++) {
        for(var j=0; j<arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j +1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


function bubbleSort(arr) {
    for(var i=0; i<arr.length; i++) {
        for(var j=0; j<arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                arr[i + 1] = arr[i-1];
            }
        }
    }
    return arr;
} 

//MergeSort is when you have 2 arrays that you want to merge into one and sort it.
var first = [4,15,16,50];
var second = [8,23,48,108,109,111,112,113];
var c = [];

function mergeSort(left, right) {
    var a = 0;
    var b = 0;
    var c = [];
    var loops = true;
    while(a < left.length && b < right.length) {
        if(left[a] < right[b]) {
            c.push(left[a]);
            a++
        } else {
            c.push(right[b]);
            b++
        }  
    }
    var d = left.slice(a);
    var e = right.slice(b);
    return c.concat(d).concat(e);
}

if(a[i] < b[j]) {
    c.push(a[i]);
} else {
    c.push(b[j]);
}