export {};
export * from "./utils";
const world = "world";

export function hello(who: string = world): string {
  return `Hello ${who}!`;
}

function addme(a: number, b: number): number {
  return a + b;
}
console.log(addme(2, 4));
console.log(addme(12, 34));
console.log("Hello World!");
