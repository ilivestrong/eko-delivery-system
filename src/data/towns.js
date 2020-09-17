export const getTowns = () => {
  let towns = [];
  for (let asciiCode = 65; asciiCode <= 90; asciiCode++) {
    towns.push({ text: String.fromCharCode(asciiCode), value: asciiCode });
  }
  return towns;
}