const readLineSync = require('readline-sync');
const chalk = require('chalk');

const user = readLineSync.question(chalk.blue(`Enter your name: `));

const welcomeMsg = 'Welcome ' + chalk.bgWhite.black(user) + ' to ' + chalk.bold.yellow('THE AVENGERS QUIZ! \n');
console.log(chalk.green(welcomeMsg));

console.log('The quiz has 7 MCQs based on Avengers MCU, you have to enter the correct option: \n');

let score = 0;

let questionBank = [{
  question: 'What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? ',
  a: '2007',
  b: '2008',
  c: '2009',
  d: '2010',
  answer: 'b'
}, {
  question: 'Who was the first major character to die? ',
  a: 'Black Widow',
  b: 'Nebula',
  c: 'Heimdall',
  d: 'Tony Stark',
  answer: 'c'
}, {
  question: 'Who was the first female superhero to appear in the title of an MCU film? ',
  a: 'Wanda Maximoff',
  b: 'Gamora',
  c: 'Black Widow',
  d: 'Wasp',
  answer: 'd'
}, {
  question: 'How does Black Widow turn the Hulk back into Bruce Banner? ',
  a: 'By kissing him',
  b: 'With a lullaby',
  c: `With a potionShouting 'Bruce Banner'`,
  d: `Shouting 'Bruce Banner'`,
  answer: 'b'
}, {
  question: 'In the comic book series, who were the original Avengers? ',
  a: 'Ant-Man, the Hulk, Iron Man, Thor, the Wasp',
  b: 'Batman, Spider-Man, Superman, Wonder Woman',
  c: 'Black Widow, Captain America, Hawkeye, the Hulk, Iron Man',
  d: 'Black Panther, Black Widow, Captain America, Scarlet Witch, Vision',
  answer: 'a'
}, {
  question: 'Where did the Hulk go at the end of Age of Ultron? ',
  a: 'Alternative Universe',
  b: 'Brazil',
  c: 'Space',
  d: 'Titan',
  answer: 'c' 
}, {
  question: 'How many infinity stones are there? ',
  a: '8',
  b: '5',
  c: '4',
  d: '6',
  answer: 'd'
}
]

function play(i,answer) {
  console.log(chalk.bgCyan.black((i+1) + "." + questionBank[i].question));  
  console.log("a)" + questionBank[i].a + "\nb)" + questionBank[i].b + '\n' + "c)" + questionBank[i].c + "\nd)" + questionBank[i].d + "\n");

  let userAns = readLineSync.question("option: ");
  
  if(userAns === answer){
    console.log(chalk.bgGreen.black('Right :)'));
    score++;
  }
  else{
    console.log(chalk.bgRed.black('Wrong :('));
    console.log('Correct Option: ' + chalk.bold.magenta(answer));
  }

  console.log(chalk.yellow('Curr Score: ' + score));
  console.log('--------------------');
}

for(let i=0;i < questionBank.length;i++) {
  let currQues = questionBank[i];
  play(i,currQues['answer']);
}

console.log("\nYay! you have finished the quiz ");
console.log(chalk.bgMagenta.black('Final Score: ' + score));

let leaderBoard = [{
  name: "Sanjiv",
  score: "4"
},{
  name: "Rohit",
  score: "3"
}]

console.log('\nleaderBoard: ');
leaderBoard.map(opt => console.log(chalk.bgWhite.black(opt.name + ": " + opt.score)));
console.log("\nIf you have beaten the leaderBoard dm me with SS, I would update the leaderBoard ASAP ");