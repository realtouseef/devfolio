import Layout from "../components/Layout/Layout";

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MEDIUM_API_ENDPOINT}`);
  const data = await res.json();
  return {
    props: {
      data,
      fallback: true,
    },
  };
}

const blog = ({ data }) => {
  return (
    <Layout>
      <main className="mt-10 mb-20">
        <h1 className="my-5 text-lg font-medium">
          Total Published Articles: {data.items.length}
        </h1>
        <article className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          {data &&
            data.items.map(
              ({ title, author, pubDate, description, categories, link }) => {
                return (
                  <a
                    href={link}
                    target="_blank"
                    key={title}
                    rel="noopener noreferrer"
                    className="rounded-lg border-2 py-4 px-8 text-left hover:border-button-light-color"
                  >
                    <div className="space-y-4">
                      <h1 className="text-lg font-semibold">{title}</h1>
                      <p className="text-xs text-muted-light-color">
                        {author} -- {pubDate}
                      </p>
                      <div
                        className="text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: description.substring(0, 200),
                        }}
                      />
                      <p className="text-xs text-muted-light-color">
                        <a> tags: {categories.join(", ")}</a>
                      </p>
                    </div>
                  </a>
                );
              }
            )}
        </article>
      </main>
    </Layout>
  );
};

export default blog;
