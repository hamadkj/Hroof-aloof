// مجموعة الحروف العربية (28 حرفاً)
const letters = [
  "أ", "ب", "ت", "ث", "ج", "ح", "خ", 
  "د", "ذ", "ر", "ز", "س", "ش", "ص", 
  "ض", "ط", "ظ", "ع", "غ", "ف", "ق", 
  "ك", "ل", "م", "ن", "هـ", "و", "ي"
];

let currentTeam = "red"; // الفريق الافتراضي

// تغيير الفريق الحالي عند الضغط على زر اختيار الفريق
function setTeam(team) {
  currentTeam = team;
}

// إنشاء لوحة الخلايا السداسية بنمط الخلية النحلية
function createBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";
  
  const rows = 4;   // عدد الصفوف
  const cols = 7;   // عدد الأعمدة
  let index = 0;
  
  for (let i = 0; i < rows; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    
    for (let j = 0; j < cols; j++) {
      if (index >= letters.length) break;
      
      const cell = document.createElement("div");
      cell.className = "hexagon";
      cell.textContent = letters[index];
      cell.onclick = function() { markHexagon(cell); };
      
      rowDiv.appendChild(cell);
      index++;
    }
    board.appendChild(rowDiv);
  }
}

// تلوين الخلية عند الضغط وإعطائها لون الفريق الحالي
function markHexagon(cell) {
  cell.classList.add(currentTeam);
  cell.classList.add("disabled");
}

// إعادة تعيين اللوحة
function resetGame() {
  createBoard();
}

// تحميل اللوحة عند فتح الصفحة
createBoard();
