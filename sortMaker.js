function sortMaker(arr) {
    let array = [];
    let temp = arr[0];
    let message;
    if (arr[0] < 0 || arr[1] < 0) {
        message = "Invalid Input";
        return message;
    } else if (arr[0] === arr[1]) {
        message = "equal";
        return message;
    }
    else if (arr[0] < arr[1]) {
        arr[0] = arr[1];
        arr[1] = temp;
        array.push(arr[0], arr[1]);
        return array;
    }
    else {
        return arr;
    }
}