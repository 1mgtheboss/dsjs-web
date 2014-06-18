/*
 **Manojit Ghosh © 2014
 */
var heapSize = 0;
var TOS = -1;
var STACK = null;
var STACK_SIZE = 0;
var front = -1;
var rear = -1;
var QUEUE = null;
var QUEUE_SIZE = 0;

function bubbleSort(a) {
    console.log("Bubble Sort:");
    var t;
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < (a.length - 1 - i); j++) {
            if (parseInt(a[j]) > parseInt(a[j + 1])) {
                t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
            }
        }
        console.log(a);
    }
}

function selectionSort(a) {
    console.log("Selection Sort:");
    var t;
    for (var i = 0; i < a.length - 1; i++) {
        var j = i;
        for (var k = i + 1; k < a.length; k++) {
            if (parseInt(a[k]) < parseInt(a[j])) j = k;
        }
        if (i != j) {
            t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
        console.log(a);
    }
}

function insertionSort(a) {
    console.log("Insertion Sort:");
    for (var j = 1; j < a.length; j++) {
        var key = a[j];
        var i = j - 1;
        while (i >= 0 && parseInt(key) < parseInt(a[i])) {
            a[i + 1] = a[i];
            i--;
        }
        a[i + 1] = key;
        console.log(a);
    }
}

function quickSort(a) {
    console.log("Quick Sort:");
    var m = 0;
    var n = a.length - 1;
    quickSorter(a, m, n);
}

function quickSorter(a, m, n) {
    var t;
    if (m < n) {
        var key = parseInt(a[m]);
        while (true) {
            for (var i = m + 1; i <= n; i++)
            if (parseInt(a[i]) > key) break;
            if (i == n + 1) i--;
            for (var j = n; j >= 1; j--)
            if (parseInt(a[j]) <= key) break;
            if (j == -1) j++;
            if (i < j) {
                t = a[i];
                a[i] = a[j];
                a[j] = t;
            } else break;
        }
        t = a[m];
        a[m] = a[j];
        a[j] = t;
        console.log(a);
        quickSorter(a, m, j - 1);
        quickSorter(a, j + 1, n);
    }
}

function mergeSort(a) {
    console.log("Merge Sort:");
    var p = 0;
    var r = a.length - 1;
    mergeSorter(a, p, r);
}

function mergeSorter(a, p, r) {
    if (p < r) {
        var q = Math.floor((p + r) / 2);
        mergeSorter(a, p, q);
        mergeSorter(a, q + 1, r);
        merge(a, p, q, r);
    }
}

function merge(a, p, q, r) {
    var i = 0;
    var j = 0;
    var m = q - p + 1;
    var n = r - q;
    var N = findLargest(a) + 1;
    var ll = new Array();
    var rr = new Array();
    for (i = 0; i < m; i++)
    ll[i] = a[p + i];
    for (j = 0; j < n; j++)
    rr[j] = a[q + j + 1];
    ll[m] = N + "";
    rr[n] = N + "";
    i = 0;
    j = 0;
    for (k = p; k <= r; k++) {
        if (parseInt(ll[i]) <= parseInt(rr[j])) {
            a[k] = ll[i];
            i++;
        } else {
            a[k] = rr[j];
            j++;
        }
    }
    console.log(a);
}

function findLargest(a) {
    var largest = parseInt(a[0]);
    for (var i = 1; i < a.length; i++) {
        if (largest < parseInt(a[i])) largest = parseInt(a[i]);
    }
    return largest;
}

function heapSort(a) {
    console.log("Heap Sort:");
    var t = "";
    buildMaxHeap(a);
    for (var i = a.length - 1; i >= 1; i--) {
        t = a[i];
        a[i] = a[0];
        a[0] = t;
        console.log(a);
        heapSize = heapSize - 1;
        maxHeapify(a, 0);
    }
}

function buildMaxHeap(a) {
    heapSize = a.length;
    for (var i = Math.floor(a.length / 2); i >= 0; i--)
    maxHeapify(a, i);
}

function maxHeapify(a, i) {
    var t = "";
    var l = 2 * i;
    var r = 2 * i + 1;
    if (l <= heapSize - 1 && parseInt(a[l]) > parseInt(a[i])) largest = l;
    else largest = i;
    if (r <= heapSize - 1 && parseInt(a[r]) > parseInt(a[largest])) largest = r;
    if (largest != i) {
        t = a[i];
        a[i] = a[largest];
        a[largest] = t;
        maxHeapify(a, largest);
    }
}

function linearSearch(a, key) {
    console.log("Linear Search:");
    console.log(a);
    for (var i = 0; i < a.length; i++)
    if (parseInt(a[i]) == parseInt(key)) {
        console.log("Success! Key found at index " + i);
        return;
    }
    console.log("Key not found!");
}

function binarySearch(a, key) {
    console.log("Binary Search:");
    a.sort(function(x, y) {
        return parseInt(x) - parseInt(y);
    });
    console.log(a);
    var low = 0;
    var high = a.length - 1;
    var mid = 0;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (parseInt(key) < parseInt(a[mid])) high = mid - 1;
        else if (parseInt(key) > parseInt(a[mid])) low = mid + 1;
        else {
            console.log("Success! Key found at index " + mid + " in the sorted array.");
            return;
        }
    }
    console.log("Key not found!");
}

function initializeStack(size) {
    if (STACK != null) console.log("One stack already exists.");
    else {
        STACK = new Array();
        STACK_SIZE = size;
        console.log("Stack initialized.");
    }
}

function push(item) {
    if (STACK == null) {
        console.log("There is no stack.");
        return;
    }
    if (TOS == STACK_SIZE - 1) console.log("Stack overflow!");
    else {
        TOS++;
        STACK.push(item);
        console.log("Item pushed.");
    }
}

function pop() {
    if (STACK == null) {
        console.log("There is no stack.");
        return;
    }
    if (TOS == -1) console.log("Stack underflow!");
    else {
        console.log(STACK.pop());
        TOS--;
    }
}

function displayStack() {
    if (STACK == null) {
        console.log("There is no stack.");
        return;
    }
    console.log(STACK);
}

function destroyStack() {
    if (STACK == null) {
        console.log("There is no stack.");
        return;
    }
    if (STACK != null) {
        STACK = null;
        TOS = -1;
        STACK_SIZE = 0;
        console.log("Stack destroyed.");
    }
}

function initializeQueue(size) {
    if (QUEUE != null) console.log("One queue already exists.")
    else {
        QUEUE = new Array();
        QUEUE_SIZE = size;
        for (var i = 0; i < QUEUE_SIZE; i++)
        QUEUE[i] = "";
        console.log("Queue initialized.");
    }
}

function insertItem(item) {
    if (QUEUE == null) {
        console.log("There is no queue.");
        return;
    }
    if (rear == QUEUE_SIZE - 1) console.log("Queue full.");
    else {
        rear++;
        if (front == -1) front++;
        QUEUE[rear] = item;
        console.log("Item inserted.");
    }
}

function deleteItem() {
    if (QUEUE == null) {
        console.log("There is no queue.");
        return;
    }
    if (front == -1) console.log("Queue empty.");
    else {
        QUEUE[front] = "";
        front++;
        if (front == QUEUE_SIZE) {
            front = -1;
            rear = -1;
        }
        console.log("Item deleted.");
    }
}

function displayQueue() {
    if (QUEUE == null) {
        console.log("There is no queue.");
        return;
    }
    console.log(QUEUE);
}

function destroyQueue() {
    if (QUEUE == null) {
        console.log("There is no queue.");
        return;
    }
    if (QUEUE != null) {
        QUEUE = null;
        front = -1;
        rear = -1;
        QUEUE_SIZE = 0;
        console.log("Queue destroyed.");
    }
}
