function findAddress(obj) {
    obj.street;
    obj.house;
    obj.society;
    if (!obj.street) {
        obj.street = "__";
    }
    else if (!obj.house) {
        obj.house = "__";
    }
    else if (!obj.society) {
        obj.society = "__";
    }
    return obj.street + "," + obj.house + "," + obj.society;
}

const dataData = {
    street: 10,
    // house: '15A',
    // society: 'John Doe'

};

const output = findAddress(dataData);
console.log(output);