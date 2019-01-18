const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20+1เท่ากับ21',()=>{
  expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ 7
test('2+5เท่ากับ7',()=>{
  expect(sum(2,5)).toBe(7);
});
// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy
test('99+1เท่ากับ100',()=>{
  expect(sum(99,1)).toBe(100);
});
test('1059+111',()=>{
  expect(sum(1059,111)).toBe(1170);
});
test('8485+168',()=>{
  expect(sum(8485,168)).toBe(8653);
});