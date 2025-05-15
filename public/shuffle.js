/**
 * Shuffle an array using the modern Fisher–Yates shuffle algorithm.
 *
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
 *
 * @param {array} array
 * @returns {array}
 */
 function shuffle(array) {
  let currentIndex = array.length;

  while (--currentIndex > 0) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}