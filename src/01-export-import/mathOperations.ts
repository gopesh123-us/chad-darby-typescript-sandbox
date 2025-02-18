export function substract(a: number, b: number): number {
  return a - b;
}

export function divide(a: number, b: number): number | string {
  return b !== 0 ? a / b : "invalid divisor";
}

export default function multiply(a: number, b: number) {
  return a * b;
}
