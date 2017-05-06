const [a, , b, , , x] = [1, 2, 3, 4, 5, 6];
console.log(a);
console.log(b);
console.log(x);

/*****************************************************/
const getObject = () => {
  return {
    "first": "first",
    "second": "second",
    "third": "third",
    "fourth": "fourth"
  }
};

const {first, third} = getObject();
console.log(first);
console.log(third);
