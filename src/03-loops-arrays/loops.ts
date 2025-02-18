let mynumbers: number[] = [100, 40, 55, 60, 7, 80];
for (let i = 0; i < 10; i++) {
  console.log(`I am at position ${i}`);
}
for (let i = 0; i < mynumbers.length; i++) {
  console.log(mynumbers[i]);
}
const average = function getAverage(): number {
  let total: number = 0;
  for (let i = 0; i < mynumbers.length; i++) {
    total = total + mynumbers[i];
  }
  return total / mynumbers.length;
};
console.log(`Average is: ${average()}`);

let sports: string[] = ["Golf", "Hiking", "Cricket", "Baseball"];
sports.forEach((sport, index) => {
  console.log(sport, `at index ${index}`);
});

for (let [index, sport] of sports.entries()) {
  console.log(`Sport: ${sport} is at index ${index}`);
}
