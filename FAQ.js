/* ==========================
        QAItem Class
========================== */
/* Represents a single FAQ item with toggle functionality */
class QAItem 
{

    constructor(question, answer) 
    {
        this.question = question;
        this.answer = answer;
    }

    // Toggles visibility of answer and updates active state for styling
    toggle(questionElement, answerElement) {
        questionElement.classList.toggle("active");
        answerElement.classList.toggle("show");
    }

    render() 
    {

       const container = document.createElement("article");
       container.className = "faq-item";

        const questionElement = document.createElement("div");
        questionElement.className = "question";
        questionElement.textContent = this.question;

        const answerElement = document.createElement("div");
        answerElement.className = "answer";
        answerElement.textContent = this.answer;

        questionElement.addEventListener("click", () => 
        {
            this.toggle(questionElement, answerElement);
        });

        container.appendChild(questionElement);
        container.appendChild(answerElement);

        return container;
    }
}


/* ==========================
   FAQ Data
========================== */
const faqItems = 
[

    new QAItem
    (
        "What is the structure of HTML?",
        "HTML (HyperText Markup Language) provides the basic structure of a webpage. It uses elements and tags to organize content such as headings, paragraphs, images, and links. A typical HTML structure includes the <html>, <head>, and <body> sections."
    ),

    new QAItem
    (
        "What is CSS styling?",
        "CSS (Cascading Style Sheets) controls the appearance of a website. It defines styles such as colors, fonts, spacing, layout, and responsiveness. While HTML creates the structure of a webpage, CSS makes it visually appealing."
    ),

    new QAItem
    (
        "What is JavaScript functionality?",
        "JavaScript is a programming language used to add interactivity and dynamic behavior to websites. It allows features such as form validation, animations, interactive menus, pop-ups, and real-time updates without reloading the page."
    ),

    new QAItem
    (
        "What is Object-Oriented Programming (OOP)?",
        "Object-Oriented Programming (OOP) is a programming paradigm based on objects. Objects combine data (properties) and actions (methods). OOP helps organize code into reusable and modular components."
    )
];


/* ==========================
   Render FAQ
========================== */
const faqContainer = document.getElementById("faq-container");

faqItems.forEach(item => 
{
    faqContainer.appendChild(item.render());
});