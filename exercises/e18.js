/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let discoveryYears = data.asteroids
  .filter((asteroid) => asteroid.discoveryYear)
  .map((asteroid) => asteroid.discoveryYear);

  let yearCounts = {};
  let maxCount = 0;
  let maxYear = null;

  discoveryYears.forEach((year) => {
      yearCounts[year] = (yearCounts[year] || 0) +1;

      if (yearCounts[year] > maxCount) {
          maxCount = yearCounts[year];
          maxYear = year;
      }
  });

  return parseInt(maxYear)
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
