const letters = [
    "أ", "ب", "ت", "ث", "ج", "ح", "خ", 
    "د", "ذ", "ر", "ز", "س", "ش", "ص", 
    "ض", "ط", "ظ", "ع", "غ", "ف", "ق", 
    "ك", "ل", "م", "ن", "هـ", "و", "ي"
];

let currentTeam = "red";  // يبدأ بفريق الأحمر

function setTeam(team) {
    currentTeam = team;
}

function createBoard() {
    const board = document.getElementById("board");
    board.innerHTML = "";

    letters.forEach(letter => {
        const btn = document.createElement("div");
        btn.textContent = letter;
        btn.classList.add("letter");
        btn.onclick = () => markLetter(btn);
        board.appendChild(btn);
    });
}

function markLetter(btn) {
    btn.classList.add(currentTeam);
    btn.classList.add("disabled");
}

function resetGame() {
    createBoard();
}

// تحميل اللعبة عند فتح الصفحة
createBoard();
