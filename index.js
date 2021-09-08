console.log("Welcome to console");
const test = [
  {
    ques: "  Q 1 - Which of the following is correct about features of JavaScript?",
    ans1: "JavaScript is a lightweight, interpreted programming language.",
    ans2: "JavaScript is designed for creating network-centric applications.",
    ans3: "JavaScript is complementary to and integrated with Java.",
    ans4: "All of the above.",
    answer: "ans4",
  },
  {
    ques: "  Q 2 -  Which of the following type of variable is visible everywhere in your JavaScript code?",
    ans1: "global variable",
    ans2: "local variable",
    ans3: "Both of the above.",
    ans4: "None of the above.",
    answer: "ans1",
  },
  {
    ques: "  Q 3 - Which built-in method returns the length of the string?",
    ans1: "length()",
    ans2: "next()",
    ans3: "string()",
    ans4: "None of the above",
    answer: "ans1",
  },
  {
    ques: "  Q 4 - Which built-in method returns the string representation of number's value?",

    ans1: "string()",
    ans2: "toValue()",
    ans3: "toNumber()",
    ans4: "None of the above",
    answer: "ans1",
  },
  {
    ques: "  Q  5 - Which of the following function of string object that splits the string objects into array of strings by separating the string into substring?",
    ans1: "slice()",
    ans2: "split()",
    ans3: "replace()",
    ans4: "search()",
    answer: "ans2",
  },
];
const ques = document.getElementById("ques");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");
const ans5 = document.getElementById("ans5");
const answer1 = document.getElementById("Answer1");
const answer2 = document.getElementById("Answer2");
const answer3 = document.getElementById("Answer3");
const answer4 = document.getElementById("Answer4");
const submit = document.getElementById("submit");
let score = document.getElementById("scorebox");

let optionsclass = document.getElementsByClassName('answer');

let useranswer;
let count = 0;
let points = 0;
function generator() {
  const obj = test[count];
  ques.innerHTML = obj.ques;
  answer1.innerHTML = obj.ans1;
  answer2.innerHTML = obj.ans2;
  answer3.innerHTML = obj.ans3;
  answer4.innerHTML = obj.ans4;
}

function selected() {
 

  if (ans1.checked) {
    useranswer = ans1.id;
  } else if (ans2.checked) {
    useranswer = ans2.id;
  } else if (ans3.checked) {
    useranswer = ans3.id;
  } else if (ans4.checked) {
    useranswer = ans4.id;
  }
 return useranswer;
}
generator();
function deselect(){

// optionsclass.forEach((curanselement) => curanselement.checked =false);
  if (ans1.checked) {
    ans1.checked = false;
  } else if (ans2.checked) {
    ans2.checked = false;

  } else if (ans3.checked) {
    ans3.checked = false;

  } else if (ans4.checked) {
    ans4.checked = false;

  }

}

submit.addEventListener("click", clicked);
function clicked() {
  let clickedAns = selected();
  let obj = test[count].answer;

  if( clickedAns==obj ){
    points++;
  }
  count++;
  deselect();
  if (count < test.length) {
    generator();
  }
  
  else {

    score.classList.remove("displayscore");
    let scoretext = document.getElementById("scoretext");

    let html = ` You score ${points}/5     
       <br><button id="playbtn" onclick="location.reload()">Play Again</button><br>
      Congratulation !!
       `;
    scoretext.innerHTML = html;

// let playbtn = document.getElementById('playbtn');
//      playbtn.addEventListener('click',()=>
//      {
//        window.open(location);
//     })
  }
}
