function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        let message = 'Please enter a string and its two parameter must be string';
        return message;
    } else if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}
