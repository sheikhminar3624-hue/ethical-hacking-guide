
// Simple content filter system

const bannedWords = [
  "sex",
  "porn",
  "xxx",
  "adult",
  "nude",
  "18+"
];

function filterContent() {
  const bodyText = document.body.innerHTML.toLowerCase();

  for (let word of bannedWords) {
    if (bodyText.includes(word)) {
      document.body.innerHTML = `
        <div style="text-align:center;padding:100px;">
          <h1 style="color:red;">Content Blocked</h1>
          <p>This page contains restricted content.</p>
        </div>
      `;
      break;
    }
  }
}

filterContent();
