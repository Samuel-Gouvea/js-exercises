for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {   
      break;
    }
  }

// Testing

for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
