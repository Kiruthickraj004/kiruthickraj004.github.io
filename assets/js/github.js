const output = document.getElementById("terminal-output");
const username = "Kiruthickraj004";
const refreshInterval = 10 * 60 * 1000;
const GITHUB_TOKEN = window.GITHUB_TOKEN || "";

async function githubFetch(url) {
  const res = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${GITHUB_TOKEN}`,
      "Accept": "application/vnd.github+json"
    }
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(`GitHub API Error: ${msg}`);
  }

  return res.json();
}

async function getGithubData() {
  const repos = await githubFetch(
    `https://api.github.com/users/${username}/repos?per_page=100`
  );

  const now = new Date();
  const TWO_WEEKS = 1000 * 60 * 60 * 24 * 14;

  let mostActive = null;
  let maxRecentCommits = 0;

  const repoStats = [];

  for (let repo of repos.slice(0, 8)) {
    const commits = await githubFetch(
      repo.commits_url.replace("{/sha}", "")
    );

    let recentCommits = 0;

    if (Array.isArray(commits)) {
      recentCommits = commits.filter(c => {
        const date = new Date(c.commit.author.date);
        return now - date < TWO_WEEKS;
      }).length;
    }

    if (recentCommits > maxRecentCommits) {
      maxRecentCommits = recentCommits;
      mostActive = repo;
    }

    const daysSinceUpdate = (now - new Date(repo.updated_at)) / (1000 * 60 * 60 * 24);

    const score =
      (recentCommits * 3) +
      (repo.stargazers_count * 2) +
      Math.max(0, 30 - daysSinceUpdate);

    repoStats.push({ repo, score });
  }

  const flagship = repoStats.sort((a, b) => b.score - a.score)[0]?.repo;

  const recentlyUpdated = [...repos].sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  )[0];

  const topRepo = [...repos].sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  )[0];

  return {
    recentlyUpdated: recentlyUpdated?.name || "N/A",
    mostActive: mostActive?.name || "N/A",
    topRepo: topRepo?.name || "N/A",
    flagship: flagship?.name || "N/A"
  };
}

async function typeText(text) {
  output.textContent = "";
  for (let i = 0; i < text.length; i++) {
    output.textContent += text.charAt(i);
    await new Promise(r => setTimeout(r, 18));
  }
}

async function renderTerminal() {
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
    output.textContent = "GitHub API limit or network error.";
  }
}

renderTerminal();
setInterval(renderTerminal, refreshInterval);
