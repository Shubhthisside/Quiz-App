function MyFunction() {
    window.location.href = "firstpage.html";
}
const space = " ";
function text() {
    //Taking data
    var first_name = document.getElementById("Firstname").value;
    var last_name = document.getElementById("Lastname").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var state = document.getElementById("State").value;
    const count = 0;
    //Storing in localstorage

    var name = localStorage.setItem("Name", first_name + space + last_name);
    var phone_number = localStorage.setItem("Phone_number", number);
    var email_user = localStorage.setItem("Email", email);
    var state_user = localStorage.setItem("State", state);

    var name = localStorage.setItem("Name", first_name + space + last_name);
    var phone_number = localStorage.setItem("Phone_number", number);
    var email_user = localStorage.setItem("Email", email);
    var state_user = localStorage.setItem("State", state);
    const email_check = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    const text_check = /^[A-Za-z]+[A-Za-z ]+$/
    var a, b, c, d;
    a = first_name + last_name;
    b = number;
    c = email;
    d = state;
    if (a.length == 0 || b.length == 0 || c == 0 || d == 0 || !email_check.test(c) || !text_check.test(a)) {
        alert("Fill all the information correctly!");
        count++;
    }

    if (count > 0) {
        text();
    }
    if (a.length != 0 && b.length != 0 && c != 0 && d != 0) {
        alert(`${localStorage.getItem('Name')} thankyou
    Your information successfully submited`);
    }

    window.location.href = "instruction.html";
}
function exit() {

    window.location.href = "index.html";

}
// function text{

// }

function cont() {
    window.location.href = "quiz_question.html";
}

function exit() {
    window.location.href = "index.html";
}


//Quiz question

const quizdata = [

    {
        question: "What does HTML stand for?",
        options: [
            "Hyperlink and Text Markup Language",
            "Hyper Text Markup Language",
            "Hyper Text Marking Language",
            "Hyper Text Machine Language",
        ],
        correct: 1,
        
    },
    {
        question: "Which of the following tag is used to embed css in html page?",
        options: [
            "<css>",
            " <!DOCTYPE html>",
            "<script>",
            "<style>",

        ],
        correct: 3,
    },

    {
        question: "Which of the below is the abbreviation of CSS ?",
        options: [
            "Cascading Style Sheets",
            "Color and Style Sheets",
            "Coded Style Sheet",
            "Cascade Sheet Style",
        ],
        correct: 0,

    },

    {
        question: "Which magical creature is known for guarding banks?",
        options: [
            "Phoenix",
            "Dragon",
            "Griffin",
            "Goblin",
        ],
        correct: 3,
    
    },

    {
        question: "What spell is used to unlock doors?",
        options: [
            "Incendio",
            "Alohomora",
            "Lumos",
            "Expelliarmus",
        ],
        correct: 1,
        
    },
    {
        question: "In famous movie matrix which pill does Neo take?",
        options: [
            "red",
            "blue",
            "green",
            "yellow",
        ],
        correct: 0,
    
    },
    {
        question: "Chaos is the ladder.Which series has this dialogue?",
        options: [
            "harry potter",
            "House of the dragon",
            "Game of thrones",
            "Breaking bad",
        ],
        correct: 2,
    
    },
    {
        question: "what is the full form of L's name in famous series Death note?",
        options: [
            "Lawliet",
            "Larkin",
            "Leolonch",
            "Leo",
        ],
        correct: 0,
        
    },
    {
        question: "Which stone did Thanos aquired first during his conquest?",
        options: [
            "Space staone",
            "Power stone",
            "Mind stone",
            "Reality stone",
        ],
        correct: 1,
        
    },
    {
        question: "What is name of Naruto's father?",
        options: [
            "Kakashi hatake",
            "Minato Namikaze",
            "Orochimaru",
            "Jiraya",
        ],
        correct: 1,
        
    },

];




//Intialise 

const quiz = document.querySelector('#quiz-section');
const answerElm = document.querySelectorAll('.answer');
const [questionelm, option_1, option_2, option_3, option_4] =
    document.querySelectorAll("#question , .option_1, .option_2, .option_3, .option_4");
const submit = document.querySelector("#submit2");
const skip = document.querySelector("#skip");

let currentQuiz = 0;
let score = 0;
const timer = document.querySelector("timer1");

//Load quiz question

const loadQuiz = () => {
    const { question, options } = quizdata[currentQuiz];
    questionelm.innerText = `${currentQuiz + 1}. ${question}`;

    options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );
    //   displayQuestion();  
};

loadQuiz();

let currentQuestionIndex = 0; // Index of the current question
let timerInterval;

if (currentQuiz + 1 < quizdata.length) {
    function displayQuestion(index) {
        const questionElement = document.getElementById('question');
        const optionElements = document.querySelectorAll('.option');
        const countdownElement = document.getElementById('countdown');


        // Set the initial time limit
        let timeRemaining = quizdata[index].timeLimit;
        countdownElement.textContent = timeRemaining + ' second';

        // Start the timer
        clearInterval(timerInterval); // Clear any previous timer
        timerInterval = setInterval(function () {
            timeRemaining--;
            countdownElement.textContent = timeRemaining + ' second';

            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                // Time's up! You can perform some action here.
                // For example, move to the next question.
                if (currentQuiz < quizdata.length - 1) {
                    currentQuiz++;
                    deselectedAnswer();
                    loadQuiz();
                }
                else {
                    quiz.innerHTML = `
        <div class="result">
        <h2>🎉 Your score: ${score}/${quizdata.length * 5} correct Answers </h2>
        <p>Congratulations on completing the quiz! ${localStorage.getItem('Name')} 🏆 </p>
        <button class="reload-button" onclick="location.reload()">Play again 🔁</button>
        <button class="reload-button" onclick="exit();">Exit game</button>
        </div>`
                        ;
                }
                displayQuestion(currentQuiz);

            }
        }, 1000);
    }

    // Initialize the first question and timer
    displayQuestion(currentQuiz);


}


//taking user answer

const getselectedoption = () => {
    let ans_index;
    answerElm.forEach((curOption, index) => {
        if (curOption.checked) {
            ans_index = index;
        }
    });
    return ans_index;
};

// deselectedAnswer
const deselectedAnswer = () => {
    answerElm.forEach((curOption) => curOption.checked = false);
}

submit.addEventListener("click", () => {
    const selectedOptionIndex = getselectedoption();

    if (selectedOptionIndex.length == 0) {
       
        loadQuiz();

    }

    if (selectedOptionIndex == quizdata[currentQuiz].correct) {
        score = score + 5;
    }
    else if (selectedOptionIndex != quizdata[currentQuiz].correct) {
        score = score - 1;
    }

    currentQuiz++;
    if (currentQuiz < quizdata.length) {
        displayQuestion(currentQuestionIndex);
    }


    if (currentQuiz < quizdata.length) {
        deselectedAnswer();
        loadQuiz();
    }
    else {
        quiz.innerHTML = `
        <div class="result">
        <h2>🎉 Your score: ${score}/${quizdata.length * 5} correct Answers </h2>
        <p>Congratulations on completing the quiz! ${localStorage.getItem('Name')} 🏆 </p>
        <button class="reload-button" onclick="location.reload()">Play again 🔁</button>
        <button class="reload-button" onclick="exit();">Exit game</button>
        </div>`
            ;
    }

});

skip.addEventListener("click", () => {
    if (currentQuiz < quizdata.length) {
        deselectedAnswer();
        displayQuestion(currentQuestionIndex);
    }

    currentQuiz++;
    if (currentQuiz < quizdata.length) {
        deselectedAnswer();
        loadQuiz();
    }
    else {
        quiz.innerHTML = `
        <div class="result">
        <h2>🎉 Your score: ${score}/${quizdata.length * 5} correct Answers </h2>
        <p>Congratulations on completing the quiz! ${localStorage.getItem('Name')} 🏆 </p>
        <button class="reload-button" onclick="location.reload()">Play again 🔁</button>
        <button class="reload-button" onclick="exit();">Exit game</button>
        </div>`
            ;
    }
});