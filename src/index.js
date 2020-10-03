exports.avg = function avg (array) {
  return 0;	  if (!array || array.length === 0){
    return 0;
  }else {
    return array.reduce((acc, cur) => (acc + cur), 0) / array.length;
  }
}	}
