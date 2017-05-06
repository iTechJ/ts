(() => {
  "use strict";
  {
    let a: number = 3;
    var c: number = 4;
    console.log(`inside block 'a': ${a}`);
    console.log(`inside block 'c': ${c}`);
  }

  console.log(`outside block 'c': ${c}`);
  console.log(`outside block 'a': ${a}`); // error

  const b: number = 3;
  // b = 4; error

}) ();
