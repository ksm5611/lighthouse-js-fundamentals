var numbers = 100;
while (numbers >= 100 && numbers <= 200) {
  if (numbers % 3 === 0 && numbers % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (numbers % 4 === 0) {
    console.log("Lighthouse");
  } else if (numbers % 3 === 0) {
    console.log("Loopy");
  } else {
    console.log(numbers);
  }
  numbers++;
}

