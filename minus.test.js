const minus=require('./minus');
test('1-1เท่ากับ0',()=>{
    expect(minus(1,1)).toBe(0);
});
test('-1-1เท่ากับ-2',()=>{
    expect(minus(-1,1)).toBe(-2);
});
test('1000-1001เท่ากับ-1',()=>{
    expect(minus(1000,1001)).toBe(-1);
});
test('500-5เท่ากับ495',()=>{
    expect(minus(500,5)).toBe(495);
});
test('99-88เท่ากับ11',()=>{
    expect(minus(99,88)).toBe(11);
});