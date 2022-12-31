import { LinkedList } from "./LinkedList.js";

describe("LinkedList.prepend()", () => {
  test("Adds new node at beginning of list", () => {
    const list = new LinkedList();
    list.prepend(22);
    const oldHead = list.head;
    list.prepend(11);

    expect(list.head.value).toBe(11);
    expect(list.head.next).toBe(oldHead);
    expect(list.size).toBe(2);
  });
});

describe("LinkedList.Append()", () => {
  test("Adds new node at end of list", () => {
    const list = new LinkedList();
    list.append(11);
    list.append(22);

    expect(list.head.value).toBe(11);
    expect(list.head.next).toBe(list.tail);
    expect(list.tail.value).toBe(22);
    expect(list.tail.next).toBe(null);
    expect(list.size).toBe(2);
  });
});

describe("LinkedList.at(index)", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
    list.append(11);
    list.append(22);
    list.append(33);
    list.append(44);
    list.append(55);
  });
  test("Returns value at a given index", () => {
    expect(list.at(0)).toBe(11);
    expect(list.at(2)).toBe(33);
    expect(list.at(4)).toBe(55);
  });
  test("Returns null when given a negative index", () => {
    expect(list.at(-3)).toBe(null);
  });
  test("Returns null when given a number larger than list.size", () => {
    expect(list.at(10)).toBe(null);
  });
});

describe("LinkedList.pop()", () => {
  test("Remove last element from list", () => {
    const list = new LinkedList();
    list.append(11);
    list.append(22);
    list.append(33);
    list.append(44);
    list.append(55);

    expect(list.tail.value).toBe(55);
    list.pop();
    expect(list.tail.value).toBe(44);
    list.pop();
    expect(list.tail.value).toBe(33);
  });
});

describe("LinkedList.contains(value)", () => {
  test("Return true if value exists in the list, otherwise return false", () => {
    const list = new LinkedList();
    list.append(11);
    list.append(22);
    list.append(33);
    list.append(44);
    list.append(55);

    expect(list.contains(55)).toBe(true);
    expect(list.size).toBe(5);
    list.pop();
    expect(list.contains(22)).toBe(true);
    expect(list.size).toBe(4);
    list.pop();
    expect(list.contains(66)).toBe(false);
    expect(list.size).toBe(3);
  });
});

describe("LinkedList.find(value)", () => {
  test("Return first index of value found in the list, return null if not found", () => {
    const list = new LinkedList();
    list.append(11);
    list.append(22);
    list.append(33);
    list.append(44);
    list.append(55);

    expect(list.find(55)).toBe(4);
    list.pop();
    expect(list.find(22)).toBe(1);
    list.pop();
    expect(list.find(66)).toBe(null);
  });
});

describe("LinkedList.toString", () => {
  test("Return string representing structure of list", () => {
    const list = new LinkedList();
    list.append(11);
    list.append(22);
    list.append(33);
    list.append(44);
    list.append(55);

    expect(list.toString()).toBe("(11)->(22)->(33)->(44)->(55)->null");
  });
});

describe("LinkedList.insertAt(value, index)", () => {
  test("Insert new node of given value at given index, return true if success", () => {
    const list = new LinkedList();
    list.append(11);
    list.append(22);
    list.append(44);
    list.append(55);

    expect(list.size).toBe(4);
    expect(list.at(2)).toBe(44);
    let response = list.insertAt(33, 2);
    expect(response).toBe(true);
    expect(list.size).toBe(5);
    expect(list.at(2)).toBe(33);
    response = list.insertAt(66, 5);
    expect(response).toBe(false);
    expect(list.size).toBe(5);
    expect(list.at(5)).toBe(null);
  });
});

describe("LinkedList.removeAt(index)", () => {
  test("Remove node from list at given index, return true if success", () => {
    const list = new LinkedList();
    list.append(11);
    list.append(22);
    list.append(33);
    list.append(44);
    list.append(55);

    expect(list.size).toBe(5);
    expect(list.at(1)).toBe(22);
    expect(list.at(2)).toBe(33);
    expect(list.at(3)).toBe(44);
    let response = list.removeAt(2);
    expect(response).toBe(true);
    expect(list.size).toBe(4);
    expect(list.at(1)).toBe(22);
    expect(list.at(2)).toBe(44);
    expect(list.at(3)).toBe(55);
    response = list.removeAt(10);
    expect(response).toBe(false);
    expect(list.size).toBe(4);
    expect(list.at(1)).toBe(22);
    expect(list.at(2)).toBe(44);
    expect(list.at(3)).toBe(55);
  });
});
