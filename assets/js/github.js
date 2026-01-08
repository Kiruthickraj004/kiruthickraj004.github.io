
const output = document.getElementById("terminal-output");
const username = "Kiruthickraj004";
const refreshInterval = 5 * 60 * 1000;

async function getGithubData() {
  const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
  const repos = await reposRes.json();

  const now = new Date();
  const TWO_WEEKS = 1000 * 60 * 60 * 24 * 14;

  let mostActive = null;
  let maxRecentCommits = 0;

  const repoStats = [];

  for (let repo of repos.slice(0, 8)) {
    const commitsRes = await fetch(repo.commits_url.replace("{/sha}", ""));
    const commits = await commitsRes.json();

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
    recentlyUpdated: recentlyUpdated?.name,
    mostActive: mostActive?.name,
    topRepo: topRepo?.name,
    flagship: flagship?.name
  };
}



async function typeText(text) {
  output.textContent = "";
  for (let i = 0; i < text.length; i++) {
    output.textContent += text.charAt(i);
    await new Promise(r => setTimeout(r, 20));
  }
}

async function renderTerminal() {
  try {
    const data = await getGithubData();

    const terminalText = `
kiruthickraj@portfolio:~$ github profile

Recently Updated: ${data.recentlyUpdated}
Most Active Repo: ${data.mostActive}
Top Repo (Stars): ${data.topRepo}
Flagship Project: ${data.flagship}
kiruthickraj@portfolio:~$ _
`;


    await typeText(terminalText);
  } catch (e) {
    output.textContent = "Failed to fetch GitHub data.";
  }
}

renderTerminal();
setInterval(renderTerminal, refreshInterval);

