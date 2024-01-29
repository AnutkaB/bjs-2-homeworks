// Задача 1
function getArrayParams(...arr) {
  
   let min = Infinity;
   let max = -Infinity;
   let sum = 0;

    for (let i = 0; i < arr.length; i++) {
     
    if (arr[i] > max) {
      max = arr[i]
    }
     
    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }
  
  const avg = +(sum / arr.length).toFixed(2);
  return { max: max, min: min, avg: avg };
  }

console.log(getArrayParams(-99, 99, 10)) // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10))  // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5))  // { min: 5, max: 5, avg: 5 }

// Задача 2

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let max = arr[0]; /*1 элемент массива */
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;
  
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
        
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

[1,2,3] - 2

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
 
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  if (countEvenElement === 0) return 0;
  return (sumEvenElement / countEvenElement).toFixed(2);
}

// summElementsWorker
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// differenceMaxMinWorker
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

// Задача 3
// Функция для суммирования элементов массива
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Функция для вычисления разницы максимального и минимального элементов массива
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}

// Функция для вычисления разницы сумм чётных и нечётных элементов массива
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

// Функция для вычисления среднего значения чётных элементов массива
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  if (countEvenElement === 0) return 0;
  return sumEvenElement / countEvenElement;
}

/* ЗАДАНИЕ 3*/

// Функция makeWork принимает два аргумента: arrOfArr и func. В первом аргументе передаётся массив, элементы которого — массивы с данными, которые будут передаваться в функцию-насадку. Вторым аргументом передаётся одна из функций насадок.

function makeWork(arrOfArr, func) {
  // Инициализируйте переменную (maxWorkerResult), в которой будет формироваться максимальный результат, и инициализуйте её начальным значением. Можно использовать самое минимальное числовое значение -Infinity, либо использовать результат насадки от самого первого элемента из полученных данных (на позиции ноль массива arrOfArr). Используйте spread-оператор для разделения массива элементов на отдельные элементы.

  let maxWorkerResult = -Infinity;
  
  // Реализуйте цикл для перебора всех элементов массива arrOfArr.
  for (let i = 0; i < arrOfArr.length; i++) {
    // Внутри цикла каждый перебираемый элемент передавайте в функцию-насадку. Используйте spread-оператор для разделения массива элементов на отдельные элементы. Результат функции сохраните в отдельную константу.
    const result = func(...arrOfArr[i]);
    // console.log(result);
    // Добавьте проверку: полученное значение больше переменной, в которой формируется максимальное значение?
    if (result > maxWorkerResult) {
      // Если полученное значение больше переменной с максимумом, то переприсваивайте переменную максимума на полученное значение.
      maxWorkerResult = result;
    }
  }
  // После выполнение цикла в переменной максимума должно быть максимальное значение результатов насадки. Эту переменную следует возвращать из функции.
  return maxWorkerResult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72