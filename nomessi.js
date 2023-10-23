function guess(answer) {
    if (currentQuestion < totalQuestions && mistakes < 1) {
        const currentQuestionIsMessi = currentQuestionIndex < messiPhrases.length;

        if ((answer === "Messi" && currentQuestionIsMessi) || (answer === "No Messi" && !currentQuestionIsMessi)) {
            correctAnswers++;
            document.getElementById("result").textContent = "¡Correcto!";
        } else {
            mistakes++;

            // Agrega las frases y los nombres de los autores aquí
            const authorNames = [
                "Usain Bolt",
                // ... (lista de autores)
                "Usain Bolt",
                "Michael Jordan",
                "Heywood Broun",
                "Michael Phelps",
                "Greg LeMond",
                "Tim Notke",
                "Brett Hull",
                "Arnold Schwarzenegger",
                "Heywood Broun",
                "Shannon Miller",
                "Albert Schweitzer",
                "Muhammad Ali",
                "Abby Wambach",
                "Nelson Mandela",
                "Kobe Bryant",
                "Brett Hull",
                "Billie Jean King",
                "Shaquille O'Neal",
                "Georges Hébert",
                "Woody Allen",
                "Pelé",
                "Serena Williams",
                "Mo Farah",
                "Zig Ziglar",
                "Mike Tyson",
                "Jackie Joyner-Kersee",
                "Jean Giraudoux",
                "Nelson Mandela",
                "Bob Beamon",
                "Pelé",
                "Cristiano Ronaldo",
                "Zig Ziglar",
                "Abby Wambach",
                "Eddie Robinson",
                "Brett Hull",
                "Serena Williams",
                "Billie Jean King",
                "Winston Churchill",
                "J.J. Watt",
                "Heywood Broun",
                "Jean Giraudoux",
                "Nelson Mandela",
                "Bob Beamon",
                "Shannon Miller",
                "Pelé",
                "Georges Hébert",
                "Nelson Mandela",
                "Mike Tyson",
                "Cristiano Ronaldo",
                "Cristiano Ronaldo",
                "Cristiano Ronaldo",
                "Cristiano Ronaldo",
                "Cristiano Ronaldo"
            ];

            const author = currentQuestionIsMessi ? "Messi" : "No Messi";
            let authorName = "";

            if (answer === "No Messi" && currentQuestionIsMessi) {
                authorName = "Lionel Messi"; // Si eligió "No Messi" cuando era Messi
            } else {
                authorName = authorNames[currentQuestionIndex - messiPhrases.length];
            }
            
            document.getElementById("result").textContent = "Incorrecto. La respuesta correcta es: " + author + " (Autor: " + authorName + ")";
        }

        currentQuestion++;

        if (mistakes >= 1 || currentQuestion >= totalQuestions) {
            document.getElementById("question").textContent = "Juego terminado. Respuestas correctas: " + correctAnswers + " de " + totalQuestions;
            mistakes = 0;
        } else {
            displayQuestion();
        }
    }
}
