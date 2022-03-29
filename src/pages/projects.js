import Layout from "../components/Layout/Layout";
import { useState, useEffect } from "react";
import Star from "../data/assets/site-icons/star.svg";

const projects = () => {
  const [GithubProjects, setGithubProjects] = useState([]);

  useEffect(() => {
    async function fetchFromGitHub() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_GH_REPO_ENDPOINT}`
      );
      const data = await response.json();
      setGithubProjects(data);
    }

    fetchFromGitHub();
  }, [setGithubProjects]);

  return (
    <Layout>
      <h1 className="border-b-2 text-3xl font-bold">
        Projects: <span className="font-medium">{GithubProjects.length}</span>
      </h1>
      {GithubProjects &&
        GithubProjects.map(
          ({
            id,
            html_url,
            name,
            description,
            stargazers_count,
            language,
            fork,
          }) => {
            return (
              <main key={id} className="mx-auto my-4 max-w-xl">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={html_url}
                  className="flex rounded-lg border-2 py-4 px-8 hover:border-button-light-color"
                >
                  <div className="space-y-2">
                    <a className="text-xl font-bold tracking-wide">{name}</a>
                    <p>{description}</p>
                    <p className="text-muted-light-color">
                      Made with:{" "}
                      <span className="font-medium text-text-light-color">
                        {language ? language : "N/A"}
                      </span>
                    </p>
                    <div className="flex items-center space-x-2">
                      <p className="flex w-max items-center space-x-2 rounded-md bg-secondary-light-color px-3 py-1 text-muted-light-color ">
                        <Star style={{ width: 14, marginBottom: 1 }} />
                        <span className="font-medium text-text-light-color">
                          {stargazers_count}
                        </span>
                      </p>
                      <p className="font-medium tracking-wide text-button-light-color">
                        {fork ? "forked" : ""}
                      </p>
                    </div>
                  </div>
                </a>
              </main>
            );
          }
        )}
    </Layout>
  );
};

export default projects;
