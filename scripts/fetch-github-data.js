import { mkdir, writeFile } from 'node:fs/promises';

const username = process.env.GITHUB_USERNAME || 'kiruthickraj004';
const token = process.env.GITHUB_TOKEN;

if (!token) {
  throw new Error('GITHUB_TOKEN is required to fetch pinned repositories.');
}

const query = `
  query ($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            pushedAt
            primaryLanguage { name color }
            repositoryTopics(first: 10) { nodes { topic { name } } }
          }
        }
      }
      repositories(
        first: 100
        ownerAffiliations: OWNER
        privacy: PUBLIC
        isFork: false
        orderBy: { field: PUSHED_AT, direction: DESC }
      ) {
        nodes {
          name
          description
          url
          stargazerCount
          pushedAt
          primaryLanguage { name color }
          repositoryTopics(first: 10) { nodes { topic { name } } }
        }
      }
    }
  }
`;

const response = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ query, variables: { login: username } })
});

if (!response.ok) {
  throw new Error(`GitHub GraphQL request failed (${response.status}).`);
}

const result = await response.json();
if (result.errors?.length || !result.data?.user) {
  throw new Error(result.errors?.map((error) => error.message).join('; ') || 'GitHub user data was unavailable.');
}

function formatRepository(repository) {
  const topics = repository.repositoryTopics.nodes.map(({ topic }) => topic.name);
  return {
    name: repository.name,
    description: repository.description || '',
    language: repository.primaryLanguage?.name || 'Repository',
    languageColor: repository.primaryLanguage?.color || '#a1a1aa',
    url: repository.url,
    stars: repository.stargazerCount,
    pushedAt: repository.pushedAt,
    techStack: [repository.primaryLanguage?.name, ...topics].filter(Boolean).slice(0, 5)
  };
}

const data = {
  fetchedAt: new Date().toISOString(),
  pinnedRepos: result.data.user.pinnedItems.nodes.map(formatRepository),
  recentRepos: result.data.user.repositories.nodes.map(formatRepository)
};

await mkdir('public', { recursive: true });
await writeFile('public/github-data.json', `${JSON.stringify(data, null, 2)}\n`);
