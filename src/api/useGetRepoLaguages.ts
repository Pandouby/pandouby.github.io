import { Octokit } from "@octokit/core";
import repoConfig from "./repoConfig.json";
import { useEffect, useState } from "react";

export function useGetRepoLanguages() {
  const repoNames = repoConfig.repoUrls;
  const repoAuthToken = repoConfig.authToken;

  const [repoData, setRepoData] = useState<any>();

  useEffect(() => {
    async function fetchRepoLanguages() {
      const octokit = new Octokit({ auth: repoAuthToken });
        
      try {
        const responses = await Promise.all(
          repoNames.map(async (repoName) => {
            const response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
              owner: 'Pandouby',
              repo: repoName,
            });
            return { [repoName]: response.data };
          })
        );
  
        const repos = responses.reduce((acc, response) => {
          return { ...acc, ...response };
        }, {});
  
        setRepoData(repos);
      } catch (error) {
        console.error('Error fetching repo languages:', error);
      }
    }
  
    fetchRepoLanguages();
  }, []);
  
  return repoData;
}
