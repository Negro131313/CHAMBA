// Lista de preguntas
const questions = [
"If you could spend a whole day doing absolutely anything (money and time are no problem), what would you choose to do and why?",
  "Think about a place you've visited that left a strong impression on you. What was it about that place that made it so memorable?",
  "Describe a skill or hobby you've always wanted to learn but haven't had the chance to yet. What attracts you to it?",
  "Imagine you're having a conversation with someone from 100 years in the future. What one question would you most want to ask them about their world?",
  "Think about a book, movie, or song that significantly influenced your perspective on something. What was it and how did it change your view?",
  "How do you think daily life (like work, communication, or leisure) has changed the most compared to when your parents were your age? What's better or worse?",
  "Describe your ideal way to relax and unwind after a particularly stressful week. What specific things would you do?",
  "If you could instantly become fluent in three new languages, which ones would you choose and what would you hope to do with each one?",
  "What's one piece of advice (big or small) that someone gave you that you still find valuable today? Why has it stuck with you?",
  "Looking ahead to the next 5 years, what personal goal or area of growth feels most important for you to focus on? What steps might you take?",
  "In the coming years, what kind of person do you hope to become, and what small changes could you start making now to get there?",
  "What aspect of your daily life do you feel needs more balance, and how might you begin to restore it?",
  "Which personal habit would you most like to improve, and what support or structure could help you succeed?",
  "Looking back a year from now, what is one thing you’d love to say you’ve accomplished? What would it take to get there?",
  "In what area of your life do you crave more clarity or direction, and what questions might help you find it?",
  "What relationships matter most to you right now, and how could you nurture them more intentionally?",
  "If you could grow your confidence in one area, what would it be? What might be your first step?",
  "What does ‘success’ look like for you on your own terms, and how aligned is your life with that vision today?",
  "What’s one belief about yourself you’re ready to challenge or let go of? What would change if you did?",
  "Where in your life do you feel you're playing it safe, and what might happen if you took a thoughtful risk?",
  "What does a fulfilling day look like to you, and how could you design more days like that?",
  "How do you recharge emotionally and mentally, and are you giving yourself enough time to do it?",
  "What skill or talent would you love to develop more fully, and what’s holding you back?",
  "When do you feel most authentic, and how can you create more space for that version of yourself?",
  "If fear wasn’t a factor, what would you pursue right now?",
  "What role does creativity play in your life, and how can you invite more of it in?",
  "What’s something you’ve always wanted to learn or try, and what’s one small way to begin?",
  "How do you define growth, and how do you know when you're experiencing it?",
  "If you could only pack three things in your carry-on to feel completely prepared for any unexpected event, what would they be and why?"
"Describe the exact feeling the moment your plane takes off. What does it make you think of and what does it represent to you?"
"What's the strangest or most fascinating thing you've ever observed in an airport terminal?"
"If you had to write a movie script that takes place entirely in a waiting lounge, what kind of drama or comedy would you include?"
"What secret song or thought do you have every time you go through airport security?"
"What does the sight of an airport at night, with all its twinkling lights, represent to you?"
  "If your future self could give you one piece of advice, what do you imagine it would be?"
  "If you had to create the perfect soundtrack for a road trip of your life, what three key songs would you include and why?"
"What's the best story you have from taking an unexpected detour on the road?"
"Describe the most memorable landscape you've seen from a car window and how it made you feel."
"What have you learned about yourself or your travel companions from being together in a car for a long time?"
"What advice would you give to someone about to embark on their first long solo road trip?"
"If you could plan a road trip with anyone, living or deceased, who would it be and what question would you ask them during the journey?"
"What is your ritual for a long road trip to make sure the experience is magical?"
"If you had to inspire someone to step out of their comfort zone, what story from an unexpected trip would you tell?"
"What important lesson about yourself did you learn while you were far from home and away from what's familiar?"
"Describe a trip that changed the way you see the world or people forever."
"If you could be instantly transported to a place you've already visited, where would it be and what moment would you relive?"
"What kind of trip do you feel you still need to take to feel that your adventure list is complete?"
"What's your foolproof method for connecting with locals in a completely new place?"
"What's the most valuable thing you've 'gained' from a trip that wasn't a souvenir?"
];

// Elementos DOM
const questionText = document.getElementById('question-text');
const responseArea = document.getElementById('response-area');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const randomBtn = document.getElementById('random-btn');

// Función para obtener índice aleatorio
function getRandomQuestionIndex() {
    return Math.floor(Math.random() * questions.length);
}

// Estado inicial
let currentQuestion = getRandomQuestionIndex();

// Actualizar la pregunta y la interfaz
function updateQuestion() {
    questionText.textContent = questions[currentQuestion];
    responseArea.value = "";
    progressText.textContent = currentQuestion + 1;
    progressBar.style.width = ((currentQuestion + 1) / questions.length * 100) + "%";

    // Actualizar estado de los botones
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? "Finalizar" : "Siguiente";
}

// Evento para el botón Siguiente
nextBtn.addEventListener('click', function () {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateQuestion();
    } else {
        alert("¡Felicidades! Has completado todas las preguntas. Sigue practicando tu inglés regularmente.");
        currentQuestion = 0;
        updateQuestion();
    }
});

// Evento para el botón Anterior
prevBtn.addEventListener('click', function () {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateQuestion();
    }
});

// Evento para el botón Aleatoria
randomBtn.addEventListener('click', function () {
    let newIndex;
    do {
        newIndex = getRandomQuestionIndex();
    } while (newIndex === currentQuestion); // Evita repetir la misma

    currentQuestion = newIndex;
    updateQuestion();
});

// Efecto de enfoque en el área de texto
responseArea.addEventListener('focus', function () {
    this.style.borderColor = '#e74c3c';
});

responseArea.addEventListener('blur', function () {
    this.style.borderColor = '#3498db';
});

// --- FUNCIONALIDAD ADICIONAL: BOTÓN PARA CORREGIR ERRORES COMUNES DE DICTADO ---

// Crear botón dinámicamente y añadirlo dentro de .controls (asegúrate que exista)
const correctDictationBtn = document.createElement("button");
correctDictationBtn.className = "btn";
correctDictationBtn.textContent = "Corregir dictado";
correctDictationBtn.style.marginTop = "15px";
document.querySelector(".controls").appendChild(correctDictationBtn);

// Mapa con correcciones para palabras mal entendidas por el dictado de voz
const correctionMap = {
    "richard": "recharge",
    "matt": "mate",
    "john": "join",
    "joseph": "yourself",
    "susan": "season",
    "michael": "cycle",
    "david": "daily",
    "william": "volume",
    "jessica": "just a cup",
    "charles": "charts",
    "andrew": "undo",
    "joshua": "just you",
    "anna": "a now",
    "brian": "brighten",
    "karen": "care in",
    "steven": "still even",
    "kevin": "cabin",
    "patrick": "path trick",
    "george": "gorge",
    "linda": "leaned a",
    "robert": "robot",
    "emily": "email he",
    "thomas": "to must",
    "nancy": "nans he",
    "barbara": "bar broth",
    "daniel": "done you",
    "sandra": "sound raw",
    "donald": "down hold",
    "ashley": "as lee",
    "kimberly": "came barely",
    "edward": "it word",
    "jason": "chase on"
};

// Evento que corrige el texto al hacer clic en el botón
correctDictationBtn.addEventListener("click", () => {
    let text = responseArea.value;

    for (const [wrong, correct] of Object.entries(correctionMap)) {
        const regex = new RegExp(`\\b${wrong}\\b`, "gi");
        text = text.replace(regex, match => {
            // Respeta mayúsculas iniciales
            return match[0] === match[0].toUpperCase()
                ? correct.charAt(0).toUpperCase() + correct.slice(1)
                : correct;
        });
    }

    responseArea.value = text;
});

// Inicializar primera pregunta
updateQuestion();

