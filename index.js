// Code your solution in this file!
function logDriverNames(drivers){
    for (const driver of drivers){
        console.log(driver.name);
    }
}

function logDriversByHometown(drivers, loc){
    for (const driver of drivers){
        if (driver.hometown === loc){
            console.log(driver.name);
        }
    }
}

function driversByRevenue(drivers){
    const temp = drivers.slice()
    temp.sort(function (a,b){
        return a.revenue - b.revenue;
    });
    return temp;
}

function driversByName(drivers){
    const temp = drivers.slice()
    temp.sort(function (a,b){
        return a.name.localeCompare(b.name);
    });
    return temp;
}

function totalRevenue(drivers){
    const reduceFunc = function (agg, el, i, arr) {
        return agg += el.revenue;
    }
    return drivers.reduce (reduceFunc, 0);
}

function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length
}