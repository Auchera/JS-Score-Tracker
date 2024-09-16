document.addEventListener("DOMContentLoaded", function() {
    const player1Btn = document.getElementById("player1Btn");
    const player2Btn = document.getElementById("player2Btn");
    const resetBtn = document.getElementById("resetBtn");
    const winningScoreInput = document.getElementById("winningScore");
    const player1ScoreDisplay = document.getElementById("player1Score");
    const player2ScoreDisplay = document.getElementById("player2Score");

    let player1Score = 0;
    let player2Score = 0;
    let winningScore = 5; 

    function updateScores() {
        player1ScoreDisplay.textContent = player1Score;
        player2ScoreDisplay.textContent = player2Score;
    }

    function checkWinner() {
        if (player1Score >= winningScore || player2Score >= winningScore) {
            if (player1Score > player2Score) {
                player1ScoreDisplay.style.color = "green";
                player2ScoreDisplay.style.color = "red";
            } else {
                player2ScoreDisplay.style.color = "green";
                player1ScoreDisplay.style.color = "red";
            }
            player1Btn.disabled = true;
            player2Btn.disabled = true;
        }
    }

    player1Btn.addEventListener("click", function() {
        player1Score++;
        updateScores();
        checkWinner();
    });

    player2Btn.addEventListener("click", function() {
        player2Score++;
        updateScores();
        checkWinner();
    });

    resetBtn.addEventListener("click", function() {
        player1Score = 0;
        player2Score = 0;
        updateScores();
        player1ScoreDisplay.style.color = "";
        player2ScoreDisplay.style.color = "";
        player1Btn.disabled = false;
        player2Btn.disabled = false;
    });

    winningScoreInput.addEventListener("change", function() {
        winningScore = parseInt(winningScoreInput.value);
    });
});