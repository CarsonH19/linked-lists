import './style.css';

import { LinkedList } from './linkedListModule';

const listOfNames = new LinkedList();

listOfNames.append("Carson");
listOfNames.append("Joohee");
listOfNames.append("Jacob");
listOfNames.append("Ashton");
listOfNames.append("Sam");
listOfNames.append("Katlyn");

console.log(listOfNames.toString());
console.log(listOfNames.listSize());
console.log(listOfNames.listHead());
console.log(listOfNames.listTail());
console.log(listOfNames.at("Joohee"));
listOfNames.pop();
console.log(listOfNames.toString());
console.log(listOfNames.contains("Jacob"));
console.log(listOfNames.find("(Sam)"))
console.log(listOfNames.listSize());
