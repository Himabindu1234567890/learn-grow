/* ==========================================
   SQL PRACTICE QUESTIONS
========================================== */

const questions = [

    /* ================= BEGINNER ================= */

    {
        level: "beginner",
        title: "Select all employees",
        description: "Display all columns from the employees table.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary",
            "department_id"
        ],
        answer: "SELECT * FROM employees;",
        keywords: [
            "select",
            "*",
            "from",
            "employees"
        ]
    },


    {
        level: "beginner",
        title: "Select employee names",
        description: "Display only employee names.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary"
        ],
        answer: "SELECT name FROM employees;",
        keywords: [
            "select",
            "name",
            "from",
            "employees"
        ]
    },


    {
        level: "beginner",
        title: "Find employees with salary above 50000",
        description: "Display employees whose salary is greater than 50000.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary"
        ],
        answer: "SELECT * FROM employees WHERE salary > 50000;",
        keywords: [
            "select",
            "from",
            "employees",
            "where",
            "salary",
            "50000"
        ]
    },


    {
        level: "beginner",
        title: "Find IT employees",
        description: "Display employees who belong to the IT department.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "department"
        ],
        answer: "SELECT * FROM employees WHERE department = 'IT';",
        keywords: [
            "select",
            "from",
            "employees",
            "where",
            "department",
            "it"
        ]
    },


    {
        level: "beginner",
        title: "Find employees with salary below 30000",
        description: "Display employees whose salary is less than 30000.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary"
        ],
        answer: "SELECT * FROM employees WHERE salary < 30000;",
        keywords: [
            "select",
            "from",
            "employees",
            "where",
            "salary",
            "30000"
        ]
    },


    {
        level: "beginner",
        title: "Sort employees by salary",
        description: "Display employees from highest salary to lowest salary.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary"
        ],
        answer: "SELECT * FROM employees ORDER BY salary DESC;",
        keywords: [
            "select",
            "from",
            "employees",
            "order",
            "by",
            "salary",
            "desc"
        ]
    },


    {
        level: "beginner",
        title: "Find unique departments",
        description: "Display each department only once.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "department"
        ],
        answer: "SELECT DISTINCT department FROM employees;",
        keywords: [
            "select",
            "distinct",
            "department",
            "from",
            "employees"
        ]
    },


    {
        level: "beginner",
        title: "Find employees between salaries",
        description: "Find employees whose salary is between 30000 and 60000.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary"
        ],
        answer: "SELECT * FROM employees WHERE salary BETWEEN 30000 AND 60000;",
        keywords: [
            "select",
            "from",
            "employees",
            "where",
            "salary",
            "between",
            "30000",
            "60000"
        ]
    },


    {
        level: "beginner",
        title: "Find names starting with A",
        description: "Find employees whose names start with the letter A.",
        table: "employees",
        columns: [
            "employee_id",
            "name"
        ],
        answer: "SELECT * FROM employees WHERE name LIKE 'A%';",
        keywords: [
            "select",
            "from",
            "employees",
            "where",
            "name",
            "like"
        ]
    },


    {
        level: "beginner",
        title: "Count employees",
        description: "Find the total number of employees.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary"
        ],
        answer: "SELECT COUNT(*) FROM employees;",
        keywords: [
            "select",
            "count",
            "from",
            "employees"
        ]
    },


    /* ================= INTERMEDIATE ================= */

    {
        level: "intermediate",
        title: "Find average salary",
        description: "Calculate the average salary of employees.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary"
        ],
        answer: "SELECT AVG(salary) FROM employees;",
        keywords: [
            "select",
            "avg",
            "salary",
            "from",
            "employees"
        ]
    },


    {
        level: "intermediate",
        title: "Find maximum salary",
        description: "Find the highest salary.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary"
        ],
        answer: "SELECT MAX(salary) FROM employees;",
        keywords: [
            "select",
            "max",
            "salary",
            "from",
            "employees"
        ]
    },


    {
        level: "intermediate",
        title: "Find minimum salary",
        description: "Find the lowest salary.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary"
        ],
        answer: "SELECT MIN(salary) FROM employees;",
        keywords: [
            "select",
            "min",
            "salary",
            "from",
            "employees"
        ]
    },


    {
        level: "intermediate",
        title: "Find total salary",
        description: "Calculate the total salary of all employees.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary"
        ],
        answer: "SELECT SUM(salary) FROM employees;",
        keywords: [
            "select",
            "sum",
            "salary",
            "from",
            "employees"
        ]
    },


    {
        level: "intermediate",
        title: "Count employees by department",
        description: "Display each department and its employee count.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "department"
        ],
        answer: "SELECT department, COUNT(*) FROM employees GROUP BY department;",
        keywords: [
            "select",
            "department",
            "count",
            "from",
            "employees",
            "group",
            "by"
        ]
    },


    {
        level: "intermediate",
        title: "Departments with average salary above 50000",
        description: "Find departments whose average salary is greater than 50000.",
        table: "employees",
        columns: [
            "employee_id",
            "department",
            "salary"
        ],
        answer: "SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 50000;",
        keywords: [
            "select",
            "department",
            "avg",
            "salary",
            "from",
            "employees",
            "group",
            "by",
            "having",
            "50000"
        ]
    },


    {
        level: "intermediate",
        title: "Find employees in IT or HR",
        description: "Display employees belonging to IT or HR.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "department"
        ],
        answer: "SELECT * FROM employees WHERE department IN ('IT', 'HR');",
        keywords: [
            "select",
            "from",
            "employees",
            "where",
            "department",
            "in",
            "it",
            "hr"
        ]
    },


    {
        level: "intermediate",
        title: "Find employees with NULL manager",
        description: "Find employees whose manager_id is NULL.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "manager_id"
        ],
        answer: "SELECT * FROM employees WHERE manager_id IS NULL;",
        keywords: [
            "select",
            "from",
            "employees",
            "where",
            "manager_id",
            "is",
            "null"
        ]
    },


    {
        level: "intermediate",
        title: "Replace NULL phone numbers",
        description: "Display 'Not Available' when the phone number is NULL.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "phone"
        ],
        answer: "SELECT COALESCE(phone, 'Not Available') FROM employees;",
        keywords: [
            "select",
            "coalesce",
            "phone",
            "from",
            "employees"
        ]
    },


    {
        level: "intermediate",
        title: "Join employees and departments",
        description: "Display employee names and department names.",
        table: "employees + departments",
        columns: [
            "employees.name",
            "employees.department_id",
            "departments.department_id",
            "departments.department_name"
        ],
        answer: "SELECT e.name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
        keywords: [
            "select",
            "from",
            "employees",
            "join",
            "departments",
            "on",
            "department_id"
        ]
    },


    /* ================= INTERVIEW ================= */

    {
        level: "interview",
        title: "Employees earning above average salary",
        description: "Find employees whose salary is greater than the average salary.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary"
        ],
        answer: "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
        keywords: [
            "select",
            "from",
            "employees",
            "where",
            "salary",
            "avg"
        ]
    },


    {
        level: "interview",
        title: "Find duplicate employee names",
        description: "Find names that appear more than once.",
        table: "employees",
        columns: [
            "employee_id",
            "name"
        ],
        answer: "SELECT name, COUNT(*) FROM employees GROUP BY name HAVING COUNT(*) > 1;",
        keywords: [
            "select",
            "name",
            "count",
            "from",
            "employees",
            "group",
            "by",
            "having"
        ]
    },


    {
        level: "interview",
        title: "Find second highest salary",
        description: "Find the second highest distinct salary.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary"
        ],
        answer: "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);",
        keywords: [
            "select",
            "max",
            "salary",
            "from",
            "employees",
            "where"
        ]
    },


    {
        level: "interview",
        title: "Find employees without a department",
        description: "Using a LEFT JOIN, find employees without a matching department.",
        table: "employees + departments",
        columns: [
            "employees.name",
            "employees.department_id",
            "departments.department_id"
        ],
        answer: "SELECT e.name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id WHERE d.department_id IS NULL;",
        keywords: [
            "select",
            "from",
            "employees",
            "left",
            "join",
            "departments",
            "where",
            "null"
        ]
    },


    {
        level: "interview",
        title: "Find top 3 salaries",
        description: "Display the three highest salaries.",
        table: "employees",
        columns: [
            "employee_id",
            "name",
            "salary"
        ],
        answer: "SELECT * FROM employees ORDER BY salary DESC LIMIT 3;",
        keywords: [
            "select",
            "from",
            "employees",
            "order",
            "by",
            "salary",
            "desc",
            "limit",
            "3"
        ]
    }

];



/* ==========================================
   VARIABLES
========================================== */

let currentQuestions = [...questions];

let currentQuestion = 0;

let score = 0;

let answered = false;



/* ==========================================
   DOM ELEMENTS
========================================== */

const questionTitle =
    document.getElementById("questionTitle");

const questionDescription =
    document.getElementById("questionDescription");

const tableName =
    document.getElementById("tableName");

const columns =
    document.getElementById("columns");

const levelBadge =
    document.getElementById("levelBadge");

const questionCounter =
    document.getElementById("questionCounter");

const questionNumber =
    document.getElementById("questionNumber");

const scoreElement =
    document.getElementById("score");

const sqlAnswer =
    document.getElementById("sqlAnswer");

const feedback =
    document.getElementById("feedback");

const correctAnswer =
    document.getElementById("correctAnswer");

const showAnswerButton =
    document.getElementById("showAnswerButton");

const progress =
    document.getElementById("progress");

const progressText =
    document.getElementById("progressText");



/* ==========================================
   LOAD QUESTION
========================================== */

function loadQuestion() {

    if (
        currentQuestion >=
        currentQuestions.length
    ) {

        showCompleted();

        return;

    }


    answered = false;


    const question =
        currentQuestions[currentQuestion];


    questionTitle.textContent =
        question.title;


    questionDescription.textContent =
        question.description;


    tableName.textContent =
        question.table;


    levelBadge.textContent =
        capitalize(question.level);


    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${currentQuestions.length}`;


    questionNumber.textContent =
        currentQuestion + 1;


    sqlAnswer.value = "";


    feedback.className =
        "feedback";


    feedback.textContent =
        "";


    correctAnswer.className =
        "correct-answer";


    correctAnswer.innerHTML =
        "";


    showAnswerButton.textContent =
        "Show Answer";


    columns.innerHTML = "";


    question.columns.forEach(function(column) {

        const element =
            document.createElement("span");


        element.className =
            "column";


        element.textContent =
            column;


        columns.appendChild(element);

    });


    updateProgress();

}



/* ==========================================
   CHECK ANSWER
========================================== */

function checkAnswer() {

    if (answered) {

        return;

    }


    const userAnswer =
        sqlAnswer.value
            .toLowerCase()
            .replace(/\s+/g, " ")
            .trim();


    if (!userAnswer) {

        feedback.className =
            "feedback wrong";


        feedback.textContent =
            "Please write your SQL query first.";


        return;

    }


    const question =
        currentQuestions[currentQuestion];


    let isCorrect = true;


    question.keywords.forEach(function(keyword) {

        if (
            !userAnswer.includes(
                keyword.toLowerCase()
            )
        ) {

            isCorrect = false;

        }

    });


    if (isCorrect) {

        score++;

        answered = true;


        scoreElement.textContent =
            score;


        feedback.className =
            "feedback correct";


        feedback.textContent =
            "✓ Correct! Your query contains the required SQL structure.";

    } else {

        feedback.className =
            "feedback wrong";


        feedback.textContent =
            "✗ Not quite. Review the question and try again.";

    }

}



/* ==========================================
   SHOW ANSWER
========================================== */

function showAnswer() {

    const question =
        currentQuestions[currentQuestion];


    if (
        correctAnswer.classList.contains(
            "visible"
        )
    ) {

        correctAnswer.className =
            "correct-answer";


        correctAnswer.innerHTML =
            "";


        showAnswerButton.textContent =
            "Show Answer";


        return;

    }


    correctAnswer.className =
        "correct-answer visible";


    correctAnswer.innerHTML = `

        <div class="answer-title">
            Correct Answer
        </div>

        <pre>${escapeHTML(question.answer)}</pre>

        <div class="answer-note">
            💡 Try writing the query yourself before moving to the next question.
        </div>

    `;


    showAnswerButton.textContent =
        "Hide Answer";

}



/* ==========================================
   CLEAR
========================================== */

function clearAnswer() {

    sqlAnswer.value = "";


    feedback.className =
        "feedback";


    feedback.textContent =
        "";

}



/* ==========================================
   NEXT QUESTION
========================================== */

function nextQuestion() {

    if (
        currentQuestion <
        currentQuestions.length
    ) {

        currentQuestion++;

        loadQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}



/* ==========================================
   FILTER QUESTIONS
========================================== */

function filterQuestions(level) {

    if (level === "all") {

        currentQuestions =
            [...questions];

    } else {

        currentQuestions =
            questions.filter(function(question) {

                return question.level === level;

            });

    }


    currentQuestion = 0;

    score = 0;


    scoreElement.textContent =
        "0";


    loadQuestion();

}



/* ==========================================
   PROGRESS
========================================== */

function updateProgress() {

    const percentage =
        ((currentQuestion + 1) /
            currentQuestions.length) * 100;


    progress.style.width =
        percentage + "%";


    progressText.textContent =
        Math.round(percentage) + "%";

}



/* ==========================================
   COMPLETED
========================================== */

function showCompleted() {

    const card =
        document.getElementById(
            "practiceCard"
        );


    card.innerHTML = `

        <div class="completed">

            <div class="completed-icon">
                🎉
            </div>

            <h2>
                Practice Complete!
            </h2>

            <p>
                You completed
                ${currentQuestions.length}
                questions.
            </p>

            <div class="final-score">
                ${score} / ${currentQuestions.length}
            </div>

            <p>
                Keep practicing to improve your SQL skills.
            </p>

            <br>

            <button
                class="check-button"
                type="button"
                id="restartButton">

                Practice Again

            </button>

        </div>

    `;


    document
        .getElementById("restartButton")
        .addEventListener(
            "click",
            function() {

                location.reload();

            }
        );

}



/* ==========================================
   CAPITALIZE
========================================== */

function capitalize(text) {

    return text
        .charAt(0)
        .toUpperCase()
        + text.slice(1);

}



/* ==========================================
   ESCAPE HTML
========================================== */

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}



/* ==========================================
   FILTER BUTTON EVENTS
========================================== */

document
    .querySelectorAll(".filter")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                document
                    .querySelectorAll(".filter")
                    .forEach(function(btn) {

                        btn.classList.remove(
                            "active"
                        );

                    });


                button.classList.add("active");


                filterQuestions(
                    button.dataset.level
                );

            }
        );

    });



/* ==========================================
   BUTTON EVENTS
========================================== */

document
    .getElementById("checkButton")
    .addEventListener(
        "click",
        checkAnswer
    );


document
    .getElementById("showAnswerButton")
    .addEventListener(
        "click",
        showAnswer
    );


document
    .getElementById("clearButton")
    .addEventListener(
        "click",
        clearAnswer
    );


document
    .getElementById("nextButton")
    .addEventListener(
        "click",
        nextQuestion
    );



/* ==========================================
   MOBILE MENU
========================================== */

document
    .getElementById("menuButton")
    .addEventListener(
        "click",
        function() {

            document
                .getElementById("navMenu")
                .classList.toggle("open");

        }
    );



/* ==========================================
   YEAR
========================================== */

document
    .getElementById("year")
    .textContent =
    new Date().getFullYear();



/* ==========================================
   START
========================================== */

loadQuestion();