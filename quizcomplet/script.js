let questions = [];
let currentQuestionIndex = 0;
let score = 0;
const quizcontainer = () =>{
    document.querySelector('.quiz-container').style.display='none';
    document.querySelector('.share').style.display='none';
    
}
const quiz_starter = () =>{
    document.querySelector(".unknown").style.display='none';
    
    document.querySelector('.quiz-container').style.display='block';
    document.querySelector('.share').style.display='block';
}
function addQuestion() {
    let question = document.getElementById('question').value;
    let option1 = document.getElementById('option1').value;
    let option2 = document.getElementById('option2').value;
    let option3 = document.getElementById('option3').value;
    let option4 = document.getElementById('option4').value;
    let correct = parseInt(document.getElementById('correctOption').value);

    if (question && option1 && option2 && option3 && option4 && correct >= 1 && correct <= 4) {
        questions.push({ question, options: [option1, option2, option3, option4], correct });

        let questionsList = document.getElementById('questionsList');
        let listItem = document.createElement('li');
        listItem.innerText = question;
        questionsList.appendChild(listItem);

        document.getElementById('question').value = "";
        document.getElementById('option1').value = "";
        document.getElementById('option2').value = "";
        document.getElementById('option3').value = "";
        document.getElementById('option4').value = "";
        document.getElementById('correctOption').value = "";

        // alert("filled should not be empty");
    } 
}

function startQuiz() {
    if (questions.length === 0) {
        alert("No questions added!");
        return;
    }
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quizSection').style.display = 'block';
    document.getElementById('result').innerText = "";
    showQuestion();
}

function showQuestion() {
    let q = questions[currentQuestionIndex];
    document.getElementById('quizQuestion').innerText = q.question;
    let optionsHTML = "";
    q.options.forEach((opt, index) => {
        optionsHTML += `<label><input type="radio" name="answer" value="${index + 1}"> ${opt}</label><br>`;
    });
    document.getElementById('quizOptions').innerHTML = optionsHTML;
}

function nextQuestion() {
    let selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert("Select an answer!");
        return;
    }

    if (parseInt(selected.value) === questions[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        document.getElementById('result').innerText = `Quiz Over! Your score: ${score}/${questions.length}`;
        document.getElementById('quizSection').style.display = 'none';
    }
}