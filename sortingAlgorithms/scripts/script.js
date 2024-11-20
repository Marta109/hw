import sortFunctions from './sortFunctions.js';

const btnContainer = document.querySelector('.btn-container');
const resultContainer = document.querySelector('.result-container');
const inputField = document.querySelector('#inputArray');

const toggleButtonsState = (value = '') => {
  const buttons = btnContainer.querySelectorAll('button');

  if (value.trim() != '') {
    buttons.forEach((button) => button.removeAttribute('disabled'));
  } else {
    buttons.forEach((button) => button.setAttribute('disabled', ''));
  }
};

const parseInputToArray = (value) => {
  value = value.trim('');
  let result;
  if (value.includes(',')) {
    result = value.replace(/\s/g, '').split(',');
  } else {
    result = value.replace(/\s+/g, ' ').split(' ');
  }

  return result.map(Number);
};

const validateArrayInput = (value) => {
  const errorMessage = document.querySelector('.error-message');
  const isValid = /^[0-9, ]*$/.test(value);
  if (!isValid) {
    errorMessage.classList.remove('none');
    toggleButtonsState();
  } else {
    errorMessage.classList.add('none');
  }
};

const showResult = (values) => {
  resultContainer.classList.remove('none');
  const result = resultContainer.querySelectorAll('p');
  result[0].textContent = `[${values[0]}]`;
  result[1].textContent = `[${values[1]}]`;
  toggleButtonsState();
};

const clearResultDisplay = () => {
  resultContainer.classList.add('none');
};

toggleButtonsState();
clearResultDisplay();

inputField.addEventListener('input', (e) => {
  let inputValue = e.target.value;
  toggleButtonsState(inputValue);
  validateArrayInput(inputValue);
  clearResultDisplay();
});

// const createCachedSortFunction = () => {
//   let cache = new Map();

//   return function calculate(arr, sortFunction) {
//     let key = arr + '';

//     if (cache.has(key)) {
//       console.log('cache result');
//       return [key, cache.get(key)];
//     }

//     const sortedArr = sortFunction(arr);
//     cache.set(key, sortedArr);
//     console.log(cache);

//     return [key, sortedArr];
//   };
// };

// const cachedSort = createCachedSortFunction();
// btnContainer.addEventListener('click', (e) => {
//   if (e.target.id) {
//     const arr = parseInputToArray(inputField.value);

//     let result = cachedSort(arr, sortFunctions[e.target.id]);
//     showResult(result);
//     inputField.value = '';
//   } else return;
// });


//todo  --- cache  class based implementation---------------------------------------

class CachedSort {
  constructor() {
    this.cache = new Map();
  }

  calculate(arr, sortFunction) {
    let key = arr + '';

    if (this.cache.has(key)) {
      console.log('cache result');
      return [key, this.cache.get(key)];
    }

    const sortedArr = sortFunction(arr);
    this.cache.set(key, sortedArr);
    console.log(this.cache);

    return [key, sortedArr];
  }
}

const cachedSort = new CachedSort();
btnContainer.addEventListener('click', (e) => {
  if (e.target.id) {
    const arr = parseInputToArray(inputField.value);
    let result = cachedSort.calculate(arr, sortFunctions[e.target.id]);
    showResult(result);
    inputField.value = '';
  } else return;
});
