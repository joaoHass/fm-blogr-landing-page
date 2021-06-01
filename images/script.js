function sumIntervals(intervals) {
  if (intervals === []) {
    return [];
  }

  // creates a new array with the first (sorted) interval as a starting element
  let finalIntervals = [intervals.sort((a, b) => a[0] - b[0])[0]];
  const lengthFinal = finalIntervals.lenght - 1;

  for (let i = 1; i < intervals.length; i++) {
    // if the final number is higher or equal to the starting number of the next interval
    if (finalIntervals[lengthFinal][1] >= intervals[i][0]) {
      // merge them, replacing the final number
      finalIntervals[lengthFinal][1] = intervals[i][1];
    } else {
      finalIntervals.push(intervals[i]);
    }
  }

  return finalIntervals.reduce((acc, el) => {
    return acc + el[1] - el[0];
  }, 0);
}
