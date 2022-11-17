/*
var topic = "HTML";

if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}

var shapes = ["triangle", "square", "pentagon", "circles"];
for (var x = 0; x < shapes.length; x++) {
  console.log(shapes[x]);
}
*/

/* following steps was not clear to what I was suppose to code:::
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];  {
  for (var x =0; x < topics.length; x++) {
    console.log(topics[x]);
}
}

function listTopics() {
  for (var x =0; x < topics.length; x++) {
    console.log(topics[x]);
}
}

function listTopics() {
if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
}

listTopics()

function SelectTopic() {
  if (topics === 'HTML') {
    console.log("Let's study HTML!");
  } else if (topics === 'CSS') {
    console.log("Let's study CSS!");
  } else if (topics === 'Git') {
    console.log("Let's study Git!");
  } else if (topics === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
  }

console.log('Here are the topics we learned through Preowrk:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();

*/

var topics = ['HTML', 'CSS', 'Git', 'JavaScript']; 
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

function selectTopic() {
  if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
  } else if (randomTopic === 'JavaSCript') {
    console.log("Let's study JavaSCript!");
  } else {
    console.log('Please try again!');
  }
  }
  
console.log('Here are the topics we learned through Preowrk:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();

