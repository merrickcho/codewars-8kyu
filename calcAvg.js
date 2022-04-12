function find_average(array) {
    return array.length === 0 ? 0 : array.reduce((p,c) => p + c, 0)/array.length 
    }