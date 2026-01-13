const output = document.getElementById("terminal-output");
const refreshInterval = 10 * 60 * 1000;

const WORKER_URL = "https://portfolio.kiruthickraj28.workers.dev/github";

async function getGithubData() {
  const res = await fetch(WORKER_URL);
  if (!res.ok) throw new Error("Worker API error");
  return res.json();
}

async function typeText(text) {
  output.textContent = "";
  for (let i = 0; i < text.length; i++) {
    output.textContent += text.charAt(i);
    await new Promise(r => setTimeout(r, 6)); // fast terminal
  }
}

async function renderTerminal() {

  // instant loading
  output.textContent = `
kiruthickraj@portfolio:~$ github profile
Fetching GitHub activity...
`;

  try {
    const data = await getGithubData();

    const terminalText = `
kiruthickraj@portfolio:~$ github profile

Recently Updated : ${data.recentlyUpdated}
Most Active Repo : ${data.mostActive}
Top Repo (Stars) : ${data.topRepo}
Flagship Project: ${data.flagship}

kiruthickraj@portfolio:~$ _
`;

    await typeText(terminalText);

  } catch (e) {
    console.error(e);
    output.textContent = "Live GitHub data unavailable.";
  }
}

renderTerminal();
setInterval(renderTerminal, refreshInterval);
