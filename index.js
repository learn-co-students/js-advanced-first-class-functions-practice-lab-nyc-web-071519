function logDriverNames(drivers) {
  drivers.forEach(element => {
    console.log(element.name);
  });
}

function logDriversByHometown(drivers, wryfrom) {
  drivers.forEach(element => {
    if (element.hometown == wryfrom) {
      console.log(element.name);
    }
  });
}

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function(drivers) {
  return drivers.slice().sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  });
};

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
};
