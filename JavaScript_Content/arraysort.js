const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

// array sort

const pointsQuarter = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

// reversing an array 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();