const layout = `
<div>
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</div>`;

window.onload = () => document.querySelector("#interpolation").innerHTML = layout;

/*********************************/
const foo: string = "I'm foo";
const bar: Date = new Date();

console.log(`Here goes foo: ${foo}, followed by bar: ${bar.getFullYear()}`);
