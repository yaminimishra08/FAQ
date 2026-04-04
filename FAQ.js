// =========================
//      QAItem Class
// =========================
// Represents a single FAQ item (question + answer)
// Encapsulates both data and behavior (OOP approach)
class QAItem 
{
    // Constructor initializes question and answer
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }

    // Toggles visibility of answer and updates active state for styling
    toggle(questionElement, answerElement) {
        questionElement.classList.toggle("active"); // visual state of question
        answerElement.classList.toggle("show"); // controls visibility of answer
    }

    // Creates and returns DOM structure for a single FAQ item
    render() {
        // Main container for each FAQ item
        const container = document.createElement("article");
        container.className = "faq-item";

        // Question element (clickable)
        const questionElement = document.createElement("div");
        questionElement.className = "question";
        questionElement.textContent = this.question;

        // Answer element (hidden by default via CSS)
        const answerElement = document.createElement("div");
        answerElement.className = "answer";
        answerElement.textContent = this.answer;

        // Attach click event to toggle answer visibility
        questionElement.addEventListener("click", () => {
            this.toggle(questionElement, answerElement);
        });

        // Append question and answer to container
        container.appendChild(questionElement);
        container.appendChild(answerElement);

        return container; // return complete FAQ item
    }
}


// ==========================
//        FAQ Data
// ==========================
// Array of QAItem objects
const faqItems = [
    new QAItem (
        "What is the structure of HTML?",
        "HTML (HyperText Markup Language) provides the basic structure of a webpage. It uses elements and tags to organize content such as headings, paragraphs, images, and links. A typical HTML structure includes the <html>, <head>, and <body> sections."
    ),

    new QAItem(
        "What is CSS styling?",
        "CSS (Cascading Style Sheets) controls the appearance of a website. It defines styles such as colors, fonts, spacing, layout, and responsiveness. While HTML creates the structure of a webpage, CSS makes it visually appealing."
    ),

    new QAItem(
        "What is JavaScript functionality?",
        "JavaScript is a programming language used to add interactivity and dynamic behavior to websites. It allows features such as form validation, animations, interactive menus, pop-ups, and real-time updates without reloading the page."
    ),

    new QAItem(
        "What is Object-Oriented Programming (OOP)?",
        "Object-Oriented Programming (OOP) is a programming paradigm based on objects. Objects combine data (properties) and actions (methods). OOP helps organize code into reusable and modular components."
    )
];


// ==========================
//      Render FAQ
// ========================== 
// Get reference to container in HTML where FAQ will be inserted
const faqContainer = document.getElementById("faq-container");

// Loop through each FAQ item and render it into the DOM    
faqItems.forEach(item => {
    faqContainer.appendChild(item.render());
});