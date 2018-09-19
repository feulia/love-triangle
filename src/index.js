/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var triangles = 0;

  for (i = 0; i < preferences.length; i++) {
    var p1 = preferences[i];
    var p2 = preferences[p1 - 1];

    if (preferences[p2 - 1] === i + 1) {
      triangles++;
    }
  }

  return Math.floor(triangles/3);
};
