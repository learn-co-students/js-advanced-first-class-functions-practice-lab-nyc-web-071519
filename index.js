const nameLog = function (driver) {
    console.log(`${driver.name}`);
}

function logDriverNames(arrayOfDrivers){
    arrayOfDrivers.forEach(nameLog);
}

function logDriversByHometown(arrayOfDrivers, location){
    arrayOfDrivers.forEach(function(driver){
        if (driver.hometown === location){
            console.log(`${driver.name}`);
        }
    });
}

function driversByRevenue(arrayOfDrivers){
    let newArray = arrayOfDrivers.slice();
    newArray.sort(function(a, b) {
        return a.revenue - b.revenue;
    });
    return newArray;
}

function driversByName(arrayOfDrivers){
    let newArray = arrayOfDrivers.slice();
    newArray.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });
    return newArray;
}

function totalRevenue(arrayOfDrivers){
    let newArray = arrayOfDrivers.slice();
    let total = newArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.revenue;
    },0)
    return total;
}

function averageRevenue(arrayOfDrivers){
    let newArray = arrayOfDrivers.slice();
    let total = newArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.revenue;
    },0)
    return total/(arrayOfDrivers.length);
}

