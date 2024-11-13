import sortFunctions from './sortFunctions.js';

const btnContainer = document.querySelector('.btn-container');
const resultContainer = document.querySelector('.result-container');
const inputField = document.querySelector('#inputArray');

const disableBtns = (value = '') => {
  const buttons = btnContainer.querySelectorAll('button');

  if (value.trim() != '') {
    buttons.forEach((button) => button.removeAttribute('disabled'));
  } else {
    buttons.forEach((button) => button.setAttribute('disabled', ''));
  }
};

const formatArr = (value) => {
  value = value.trim('');
  let result;
  if (value.includes(',')) {
    result = value.replace(/\s/g, '').split(',');
  } else {
    result = value.replace(/\s+/g, ' ').split(' ');
  }

  return result.map(Number);
};

const validateInput = (value) => {
  const errorMessage = document.querySelector('.error-message');
  const isValid = /^[0-9, ]*$/.test(value);
  if (!isValid) {
    errorMessage.classList.remove('none');
    disableBtns();
  } else {
    errorMessage.classList.add('none');
  }
};

const showResult = (values) => {
  resultContainer.classList.remove('none');
  const result = resultContainer.querySelectorAll('p');
  result[0].textContent = `[${values[0]}]`;
  result[1].textContent = `[${values[1]}]`;
  disableBtns();
};

const hideResult = () => {
  resultContainer.classList.add('none');
};

disableBtns();
hideResult();

inputField.addEventListener('input', (e) => {
  let inputValue = e.target.value;
  disableBtns(inputValue);
  validateInput(inputValue);
  hideResult();
});

const calculateWithCacheFunction = () => {
  let cache = new Map();

  return function calculate(arr, sortFunction) {
    let key = arr + '';

    if (cache.has(key)) {
      console.log('cache result');
      return [key, cache.get(key)];
    }

    const sortedArr = sortFunction(arr);
    cache.set(key, sortedArr);
    console.log(cache);

    return [key, sortedArr];
  };
};

const sortArr = calculateWithCacheFunction();
btnContainer.addEventListener('click', (e) => {
  if (e.target.id) {
    const arr = formatArr(inputField.value);

    let result = sortArr(arr, sortFunctions[e.target.id]);
    showResult(result);
    inputField.value = '';
  } else return;
});
