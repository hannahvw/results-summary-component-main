const testResults = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

const categoryName = document.querySelectorAll(".summary-container-title");
const categoryScore = document.querySelectorAll(".category-score");

testResults.forEach(function (category, i) {
  categoryName[i].innerText = testResults[i].category;
});

testResults.forEach(function (score, i) {
  categoryScore[i].innerText = testResults[i].score;
});

/*  WHY didn't this work???
const categoryName = document.querySelectorAll(".summary-container-title");
const categoryScore = document.getElementsByClassName("category-score");

for (let i = 0; i < testResults.length; i++) {
  categoryName[1].innerText = testResults[i].category;
  console.log(testResults[i].category);
}

for (let i = 0; i < testResults.length; i++) {
  console.log(testResults[i].score);
  categoryScore[1].innerHTML = testResults[i].score;
}
*/
