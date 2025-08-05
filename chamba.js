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
            "Looking ahead to the next 5 years, what personal goal or area of growth feels most important for you to focus on? What steps might you take?"
        ];
        
        // Elementos DOM
        const questionText = document.getElementById('question-text');
        const responseArea = document.getElementById('response-area');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const progressText = document.getElementById('progress-text');
        const progressBar = document.getElementById('progress-bar');
        
        // Estado inicial
        let currentQuestion = 0;
        
        // Actualizar la pregunta y la interfaz
        function updateQuestion() {
            questionText.textContent = questions[currentQuestion];
            responseArea.value = "";
            progressText.textContent = currentQuestion + 1;
            progressBar.style.width = ((currentQuestion + 1) * 10) + "%";
            
            // Actualizar estado de los botones
            prevBtn.disabled = currentQuestion === 0;
            nextBtn.textContent = currentQuestion === questions.length - 1 ? "Finalizar" : "Siguiente";
        }
        
        // Evento para el botón Siguiente
        nextBtn.addEventListener('click', function() {
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
        prevBtn.addEventListener('click', function() {
            if (currentQuestion > 0) {
                currentQuestion--;
                updateQuestion();
            }
        });
        
        // Inicializar
        updateQuestion();
        
        // Efecto de enfoque en el área de texto
        responseArea.addEventListener('focus', function() {
            this.style.borderColor = '#e74c3c';
        });
        
        responseArea.addEventListener('blur', function() {
            this.style.borderColor = '#3498db';
        });