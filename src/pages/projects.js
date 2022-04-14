import Layout from "../components/Layout/Layout";
import Star from "../data/assets/site-icons/star.svg";

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GH_REPO_ENDPOINT}`);
  const data = await res.json();
  return {
    props: {
      data,
      fallback: true,
    },
  };
}

const Projects = ({ data }) => {
  return (
    <Layout>
      <h1 className="mb-4 border-b-2 text-3xl font-bold">
        Projects: <span className="font-medium">{data.length}</span>
      </h1>
      <center className="my-10 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
        {data &&
          data.map(
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
                <main
                  key={id}
                  className="rounded-lg border-2 py-4 px-8 text-left hover:border-button-light-color"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={html_url}
                    className="space-y-2"
                  >
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
                  </a>
                </main>
              );
            }
          )}
      </center>
    </Layout>
  );
};

export default Projects;
