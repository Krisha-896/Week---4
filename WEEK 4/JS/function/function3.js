function test1(a, b) {
  console.log(a, b);
}

test1();

function test(a = 0, b = 0) {
  console.log(a, b);
}

test();
test(4, 5);
test(12);
