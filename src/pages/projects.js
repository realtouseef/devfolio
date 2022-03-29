import Layout from "../components/Layout/Layout";
import { useState, useEffect } from "react";

const projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchFromGitHub() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_GH_REPO_ENDPOINT}`
      );
      const data = await response.json();
      setProjects(data);
    }

    fetchFromGitHub();
  }, [setProjects]);

  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        Projects: <span className="font-medium">{projects.length}</span>
      </h1>
      <hr />
      {projects &&
        projects.map(
          ({
            id,
            html_url,
            name,
            description,
            homepage,
            stargazers_count,
            language,
          }) => {
            return (
              <main key={id} className="mt-6">
                <a
                  target="_blank"
                  href={html_url}
                  className="grid grid-cols-2 rounded-lg border-2 py-4 px-8 hover:border-button-light-color"
                >
                  <div>
                    <a className="text-lg font-medium">{name}</a>
                    <p>{description}</p>
                    <p>Homepage: {homepage}</p>
                    <p>Made with: {language}</p>
                    <p>Stars: {stargazers_count}</p>
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
