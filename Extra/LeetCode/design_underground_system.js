// An underground railway system is keeping track of customer travel times
// between different stations. They are using this data to calculate the
// average time it takes to travel from one station to another.

// Implement the UndergroundSystem class:
// void checkIn(int id, string stationName, int t)
// - A customer with a card ID equal to id, checks in at the station stationName
//   at time t.
// - A customer can only be checked into one place at a time.

// void checkOut(int id, string stationName, int t)
// - A customer with a card ID equal to id, checks out from the station stationName at
//   time t.

// double getAverageTime(string startStation, string endStation)
// - Returns the average time it takes to travel from startStation to endStation.
// - The average time is computed from all the previous traveling times
//   from startStation to endStation that happened directly, meaning a check in
//   at startStation followed by a check out from endStation.
// - The time it takes to travel from startStation to endStation may be different
//   from the time it takes to travel from endStation to startStation.
// - There will be at least one customer that has traveled from startStation to
//   endStation before getAverageTime is called.
// - You may assume all calls to the checkIn and checkOut methods are consistent.
//   If a customer checks in at time t1 then checks out at time t2, then t1 < t2.
//   All events happen in chronological order.

class UndergroundSystem {
  // Store customer check-ins
  customers = new Map();
  // Store totaltimes
  tripTimes = new Map();

  checkIn(id, stationName, t) {
    // Check in customer in the customers Map as:
    // key: id -> value: {stationName, startingTime}
    this.customers.set(id, { stationName, t });
  }
  checkOut(id, stationName, t) {
    // Fetch customer's checkIn data
    const checkInData = this.customers.get(id);
    // Use string iterpolation for generating trip names
    const tripName = `${checkInData.stationName}-${stationName}`;
    // If data for this trip is already stored, grab that info.
    // Otherwise, generate defaults for totalTime and count that equal 0.
    const { totalTime, count } = this.tripTimes.get(tripName) ?? {
      totalTime: 0,
      count: 0,
    };
    // Set the updated data with:
    // totalTime + (checkInTime - checkOutTime),
    // count + 1
    this.tripTimes.set(tripName, {
      totalTime: totalTime + (t - checkInData.t),
      count: count + 1,
    });
  }
  getAverageTime(startStation, endStation) {
    // Generate the trip name and get the data for that trip
    const { totalTime, count } = this.tripTimes.get(
      `${startStation}-${endStation}`
    ) ?? { totalTime: 0, count: 0 };
    // Get the average from dividing totalTime by count
    return totalTime / count;
  }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
