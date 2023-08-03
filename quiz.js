const questions=[
    {
        ques: "Which of the following is a correct format of Email address?",
        a:"name@website@info",
        b:"name@website.info",
        c:"www.nameofsite.com",
        d:"name.website.com",
        correct:"b"
    },
    {
        ques:"HTML stands for?",
        a:"Hyper Text Markup Language",
        b:"High Text Markup Language",
        c:"Hyper Tabular Markup Language",
        d:"none of the above",
        correct:"a"
    },
    {
        ques:"Correct HTML tag for the largest heading is",
        a:"<head>",
        b:"<h6>",
        c:"<heading>",
        d:"<h1>",
        correct:"d"
    },
    {
        ques:"The amount of uncertainty in a system of symbol is called",
        a:"Bandwidth",
        b:"Entropy",
        c:"loss",
        d:"quantum",
        correct:"b"
    }
];
let index=0;
let total= questions.length;
let right=0;
let wrong =0;
const quesBox=document.getElementById("quesBox");
const optionInputs=document.querySelectorAll(".options");
const loadQuestion = () => {
    if  (index===total){
        return endQuiz();
    }
    reset();
    const data=questions[index];
    quesBox.innerText=`${index+1}) ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText =data.a;
    optionInputs[1].nextElementSibling.innerText =data.b;
    optionInputs[2].nextElementSibling.innerText =data.c;
    optionInputs[3].nextElementSibling.innerText =data.d;
}

const submitQuiz = () => {
    const data=questions[index];
    const ans = getAnswer();
    if (ans===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion()
}
const getAnswer = () => {
    let ans;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                ans=input.value;
            }
        }
    )
    return ans;
}
const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked= false;
        }
    )
}
const endQuiz = () =>{
    document.getElementById("box").innerHTML=`<h3>Thank You For Playing The Quiz</h3>
    <h2>You got <span>${right}</span> / ${total}</h2>`
}
loadQuestion()