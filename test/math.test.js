import test from 'node:test';
import assert from 'node:assert/strict';

import { sum, average, max, min } from '../src/math.js';

test('sum 返回所有元素之和', () => {
  assert.equal(sum([1, 2, 3]), 6);
  assert.equal(sum([]), 0);
});

test('average 返回算术平均值', () => {
  assert.equal(average([1, 2, 3]), 2);
  assert.equal(average([2, 4]), 3);
  assert.equal(average([5]), 5);
});

test('average 对空数组返回 0', () => {
  assert.equal(average([]), 0);
});

test('max 与 min', () => {
  assert.equal(max([1, 9, 3]), 9);
  assert.equal(min([1, 9, 3]), 1);
});
