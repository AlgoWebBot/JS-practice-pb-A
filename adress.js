function findAddress(obj) {  
    let street = obj.street || '__';
    let house = obj.house || "__";
    let society = obj.society || "__";
    let valid = street + "," + house + "," + society;  
    return valid;  
}
console.log(findAddress({street:10}))