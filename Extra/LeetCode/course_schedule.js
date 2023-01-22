var canFinish = function (numCourses, prerequisites) {
  const preReqs = new Map();
  const howManyReqs = Array(numCourses).fill(0);

  for (const [course, reqiured] of prerequisites) {
    // build preReqs map
    if (preReqs.has(reqiured)) {
      preReqs.get(reqiured).push(course);
    } else {
      preReqs.set(reqiured, [course]);
    }
    // we need to know how many reqs for each course (node)
    howManyReqs[course]++;
  }
  // push all of the courses that have no requirements
  // to get them out of the way
  const queue = [];
  for (let i = 0; i < howManyReqs.length; i++) {
    if (howManyReqs[i] === 0) queue.push(i);
  }
  // if no courses have 0 requirements, we will never reach a point that
  // any path can be completed. As such, the while loop will get skipped
  // because the condition won't be met at all.
  let completed = 0;
  while (queue.length) {
    const course = queue.shift();
    // if any other courses require current course
    if (preReqs.has(course)) {
      for (const req of preReqs.get(course)) {
        // remove from that course's reqs, because we know we can complete current
        howManyReqs[req]--;
        if (howManyReqs[req] === 0) {
          // if that course has no more requirements, we know we can complete it,
          // so we queue it up to increment the count
          queue.push(req);
        }
      }
    }
    // we increment this count each pass, and if something cycles, this number
    // won't match the numCourses when we finally return
    completed++;
  }
  return numCourses === completed;
};

const numCourses = 2;
const prerequisites = [
  [1, 0],
  [0, 1],
]; // Expect false

const numCourses2 = 3;
const prerequisites2 = [
  [0, 1],
  [0, 2],
  [1, 2],
]; // Expect true

const numCourses3 = 7;
const prerequisites3 = [
  [1, 0],
  [0, 3],
  [0, 2],
  [3, 2],
  [2, 5],
  [4, 5],
  [5, 6],
  [2, 4],
]; // Expect true

const numCourses4 = 3;
const prerequisites4 = [
  [0, 1],
  [0, 2],
  [1, 0],
]; // Expect false

const numCourses5 = 13;
const prerequisites5 = [
  [1, 2],
  [2, 3],
  [2, 10],
  [3, 4],
  [4, 5],
  [4, 11],
  [5, 1],
]; // expect false

console.log("Should be false: ", canFinish(numCourses, prerequisites));
console.log("Should be true: ", canFinish(numCourses2, prerequisites2));
console.log("Should be true: ", canFinish(numCourses3, prerequisites3));
console.log("Should be false: ", canFinish(numCourses4, prerequisites4));
console.log("Should be false: ", canFinish(numCourses5, prerequisites5));
