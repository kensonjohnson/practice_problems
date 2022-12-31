import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.prepend(22);
list.append(33);
list.prepend(11);
console.log(list.toString());
console.log(list.headValue());
console.log(list.tailValue());
list.prepend(1);
list.append(44);
console.log(list.toString());
list.insertAt(38, 4);
console.log(list.contains(38));
console.log(list.contains(25));
console.log(list.toString());
list.removeAt(3);
console.log(list.toString());
console.log(list.find(38));
list.pop();
console.log(list.toString());
