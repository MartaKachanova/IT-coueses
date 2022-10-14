/**
 * Задача 1.
 *
 * Напишите функцию defer, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает параметры:
 * - `start` — число, c которого начнется отсчет;
 * - `end` — верхний порог, до которого будет идти отсчет;
 * - `delay` — это время в `мс` между выводами.
 *
 * Функция должна уметь считать в обе стороны.
 * Для решения задачи необходимо использовать setTimeout и циклы
 **/

// Решение
function defer(start, end, delay = 0) {
  const position = start < end;

  if (position) {
    for (let i = start; i <= end; i++) {
      setTimeout(() => console.log(i), Math.round(delay));
    }
  }

  if (!position) {
    for (let i = start; i >= end; i--) {
      setTimeout(() => console.log(i), Math.round(start - i) + delay);
    }
  }
}

defer(1, 3, 1000);
//1
//2
//3
defer(3, 1, 1000);
// 3
// 2
// 1
