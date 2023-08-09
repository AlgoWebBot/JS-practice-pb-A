function canPay(changeArray, totalDue) {
    let sum = 0;
    if (changeArray.length === 0) {
        let message = "Please provide a array with some element !."
        return message;
    }
    for (var i = 0; i < changeArray.length; i++){
        sum += changeArray[i];
    }
    if (sum >= totalDue) {
        return true;
    } else {
        return false;
    }
}