/**
 * @name obj
 * @property {function} bar
 */
const handler = () => {
  "use strict";
  console.log("the handler handles");
};

const obj = {
  ['bar']: () => {
    "use strict";
    console.log("bar")
  },
  handler,
  [ "prop_" + (() => 42)() ]: 42
};

console.log(obj);
obj.bar();
