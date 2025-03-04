const letters = [
    "أ", "ب", "ت", "ث", "ج", "ح", "خ", 
    "د", "ذ", "ر", "ز", "س", "ش", "ص", 
    "ض", "ط", "ظ", "ع", "غ", "ف", "ق", 
    "ك", "ل", "م", "ن", "هـ", "و", "ي"
];

const questions = {
    "أ": "كم عدد الكواكب في المجموعة الشمسية؟",
    "ب": "ما هو أكبر محيط في العالم؟",
    "ت": "ما هو حاصل ضرب 7 × 8؟",
    "ث": "ما هو عاصمة فرنسا؟",
    "ج": "ما هو العنصر الكيميائي الذي يرمز له بـ O؟",
    "ح": "كم عدد حروف اللغة العربية؟",
    "خ": "اذكر اسم نهر في أفريقيا.",
    // أضف المزيد من الأسئلة أو الجوائز هنا
};

function createBoard() {
    const board = document.getElementById("board");
    board.innerHTML = "";

    letters.forEach(letter => {
        const btn = document.createElement("button");
        btn.textContent = letter;
        btn.onclick = () => showResult(letter);
        board.appendChild(btn);
    });
}

function showResult(letter) {
    const result = document.getElementById("result");
    result.textContent = questions[letter] || "مبروك! ربحت جائزة 🎉";
}

function resetGame() {
    document.getElementById("result").textContent = "";
    createBoard();
}

// تحميل اللعبة عند فتح الصفحة
createBoard();
