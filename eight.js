const answers = ["It is certain", "Without a doubt", "Yes, definitely",
           "You can rely on it", "Most likely", "Good outlook", "Yes", 
            "Don't count on it", "Negative", "My sources say no", 
            "Outlook not so good", "Very doubtful", "Try again", "Ask again later",
            "Cannot predict now", "Concentrate and ask again"];

            window.onload = function() {
                let eight = document.getElementById("eight");
                let answer = document.getElementById("answer");
                let eightball = document.getElementById("eight-ball");
                let question = document.getElementById("question");

                eightball.addEventListener("click", function() {
                    if (question.value.length < 1) {
                        alert('Ask a question!');
                    } else {
                        eight.innerText = "";
                        let num = Math.floor(Math.random() * Math.floor(answers.length));
                        answer.innerText = answers[num];
                    }
                });
            };