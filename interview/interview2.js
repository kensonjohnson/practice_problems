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
  // To prepare for Kahn's algorithm, we need a set of start nodes with no incoming edges:
  // We start by creating an adjacency list and an array that tracks the number of incoming edges for each node.
  const adjList = new Map();
  const incomingEdges = new Array(numCourses).fill(0);
  for (const [courseNumber, requirement] of prerequisites) {
    // map all courses with an array of their requirements
    const currentList = adjList.get(requirement) || [];
    currentList.push(courseNumber);
    adjList.set(requirement, currentList);
    // increment incomingEdges for each course
    incomingEdges[courseNumber]++;
  }

  // Now we can create the set of start nodes:
  // In this case, we can use a queue to keep track of the nodes with no incoming edges.
  const queue = [];
  // iterate over incomingEdges
  for (let i = 0; i < incomingEdges.length; i++) {
    // if no incoming edges, push to queue
    if (incomingEdges[i] === 0) {
      queue.push(i);
    }
  }

  // Now we can start the algorithm:
  const answerArray = [];
  // We iterate over the queue until it is empty.
  while (queue.length) {
    // We start by removing a node from the queue and adding it to the sorted list.
    const currentCourse = queue.shift();
    answerArray.push(currentCourse);
    // Next we check if the node has any neighbors.
    const children = adjList.get(currentCourse);
    if (!children) continue;
    // We then iterate over the node's neighbors and remove the edges from the graph.
    for (const child of children) {
      incomingEdges[child]--;
      // If a neighbor has no more incoming edges, we add it to the queue.
      if (incomingEdges[child] === 0) {
        queue.push(child);
      }
    }
  }

  // Finally, we check if the graph still has edges:
  // If it does, then there is at least one cycle and the topological sort is not possible.
  // Otherwise, we return the sorted list.
  return numCourses === answerArray.length ? answerArray : [];
};

console.log(findOrder(numCourses, prerequisites));

// https://en.wikipedia.org/wiki/Topological_sorting
//
// Kahns Algorithm
// L ← Empty list that will contain the sorted elements
// S ← Set of all nodes with no incoming edge

// while S is not empty do
//     remove a node n from S
//     add n to L
//     for each node m with an edge e from n to m do
//         remove edge e from the graph
//         if m has no other incoming edges then
//             insert m into S

// if graph has edges then
//     return error   (graph has at least one cycle)
// else
//     return L   (a topologically sorted order)
