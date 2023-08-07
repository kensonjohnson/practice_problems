// https://leetcode.com/problems/course-schedule-ii/

// There are a total of numCourses courses you have to take, labeled from 0 to
// numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi]
// indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid
// answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

// Example 2:
const numCourses = 4,
  prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ];
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

// Example 3:
// Input: numCourses = 1, prerequisites = []
// Output: [0]

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const adjList = new Map();
  // iterate over prerequisites
  for (const [courseNumber, requirement] of prerequisites) {
    // map all courses with an array of their requirements
    const currentList = adjList.get(courseNumber) || [];
    currentList.push(requirement);
    adjList.set(courseNumber, currentList);
  }

  // create an set for order of courses
  const orderReversed = new Set();
  // pass in numcourses - 1 and array to evaluateRequirements
  evaluateRequirements(numCourses - 1, orderReversed, adjList);

  // convert orderReversed to array and reverse to proper order
  const answer = Array.from(orderReversed).reverse();
  // return answer array
  return answer;
};

function evaluateRequirements(courseNumber, answerSet, adjList) {
  // push courseNumber to answerArray
  answerSet.add(courseNumber);
  // iterate over requirements for course
  const children = adjList.get(courseNumber);
  if (!children) {
    return;
  }
  for (const child of children) {
    // call evaluateRequirements on each requirement
    evaluateRequirements(child, answerSet, adjList);
  }
}

console.log(findOrder(numCourses, prerequisites));
