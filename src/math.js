/**
 * 一些基础数学函数。
 */

// 202611102233服务器

/** 求和 */
export function sum(numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

/** 平均值：所有元素之和除以元素个数 */
export function average(numbers) {
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}

/** 最大值 */
export function max(numbers) {
  return Math.max(...numbers);
}

/** 最小值 */
export function min(numbers) {
  return Math.min(...numbers);
}
