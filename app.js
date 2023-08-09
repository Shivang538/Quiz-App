const question = [
    {
        'que': 'Which of the following is a markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'a',
    },
    {
        'que': 'The full form of CSS is:',
        'a': 'Cascading Style Sheets',
        'b': 'Colored Speacial Sheets',
        'c': 'Color and Style Sheets',
        'd': 'None',
        'correct': 'a',
    },
    {
        'que': 'How can we change the text color of an element?',
        'a': 'background-color',
        'b': 'color',
        'c': 'Both A & B',
        'd': 'None',
        'correct': 'b',
    },
    {
        'que': 'What is JavaScript?',
        'a': 'JavaScript is a scripting language used to make the website interactive',
        'b': 'JavaScript is an assembly language used to make the website interactive',
        'c': 'JavaScript is a compiled language used to make the website interactive',
        'd': 'None of the mentioned',
        'correct': 'a',

    },
    {
        'que': 'Which of the following is correct about JavaScript?',
        'a': 'JavaScript is an Object-Based language',
        'b': 'JavaScript is Assembly-language',
        'c': 'JavaScript is an Object-Oriented language',
        'd': 'JavaScript is a High-level language',
        'correct': 'a',
    },
    {
        'que': ' Among the given statements, which statement defines closures in JavaScript?',
        'a': 'JavaScript is a function that is enclosed with references to its inner function scope',
        'b': 'JavaScript is a function that is enclosed with references to its lexical environment',
        'c': 'JavaScript is a function that is enclosed with the object to its inner function scope',
        'd': 'None of the mentioned',
        'correct': 'b',
    },
]

let index=0;
let total=question.length;
let right=0;
let wrong=0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () => {
    if(index===total){
        return endQuiz();
    }
    reset();

    const data = question[index];
    quesBox.innerText = `${index+1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

const sumbitQuiz = () => {
    const data = question[index];
    const ans = getAnswer()
    console.log(ans,data.correct);
    if(ans==data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            
            }
                 
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked=false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3> Thank you for playing the quiz</h3>
        <h2> ${right} / ${total} are correct</h2>
    </div>
    `
}


loadQuestion();