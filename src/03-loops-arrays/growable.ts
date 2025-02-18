//growable arrays
const myscores: number[] = [10, 20, 10, 40, 50];
function displayScores() {
  console.log(myscores);
}

displayScores();
myscores.push(100);
myscores.pop();
myscores.pop();
displayScores();
myscores.splice(1, 0, 700);
displayScores();
myscores.splice(2, 2, 1000, 2000);
displayScores();
