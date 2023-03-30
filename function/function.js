// No 1

const nameInput = document.getElementById("name");
const productInput = document.getElementById("product");
const result = document.getElementById("result");

const onlineShop = () => {
  result.innerText = `Terima kasih ${nameInput.value} telah membeli produk ${productInput.value}`;
};

const submitShop = (event) => {
  event.preventDefault();
  onlineShop();
};

// No 2

// Fahrenheit to Celcius
const frhTemp = document.getElementById("frh-temp");
const frhToClcResult = document.getElementById("frh-to-clc");

const minusByThreeTwo = (number) => {
  return number - 32;
};

const getCelcius = () => {
  frhToClcResult.innerText = minusByThreeTwo(frhTemp.value) * (5 / 9);
};

const submitFrhTemp = (event) => {
  event.preventDefault();
  getCelcius();
};

// Celcius to Fahrenheit

const clcTemp = document.getElementById("clc-temp");
const clcToFrhResult = document.getElementById("clc-to-frh");

const multiplyByNineFifths = (number) => {
  return number * (9 / 5);
};

const getFahrenheit = () => {
  clcToFrhResult.innerText = multiplyByNineFifths(clcTemp.value) + 32;
};

const submitClcTemp = (event) => {
  event.preventDefault();
  getFahrenheit();
};

// No 3

const catAge = document.getElementById("cat-age");
const humanAgeResult = document.getElementById("human-age");

const catAgeResult = () => {
  let catYears = 0;

  if (Number(catAge.value) === 1) catYears += 15;
  else if (Number(catAge.value) === 2) catYears += 24;
  else catYears += 24 + (Number(catAge.value) - 2) * 4;

  humanAgeResult.innerText = catYears;
};

const submitCatAge = (event) => {
  event.preventDefault();
  catAgeResult();
};

// No 4

const string = document.getElementById("string");
const stringResult = document.getElementById("string-result");

const convert = (event) => {
  event.preventDefault();
  stringResult.innerText = string.value.toLowerCase();
};
