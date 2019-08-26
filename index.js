// Code your solution in this file!
const logDriverNames = function(drivers){
    drivers.forEach(function(dr){
        console.log(dr.name)
    })
}

const logDriversByHometown = function(drivers, location){
    drivers.forEach(function(dr){
        if(dr.hometown === location){
            console.log(dr.name)
        }
    })
}

const driversByRevenue = function(drivers){
    return drivers.slice().sort(function(drA, drB){
        return drA.revenue - drB.revenue
    })
}

const driversByName = function(drivers){
    return drivers.slice().sort(function(drA, drB){
        return drA.name.localeCompare(drB.name)
    })
}

const totalRevenue = function(drivers){
    return drivers.reduce(function(sum, dr){
        return dr.revenue + sum
    }, 0)
}

const averageRevenue = function(drivers){
    return totalRevenue(drivers) / drivers.length
}