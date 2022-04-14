import Layout from "../components/Layout/Layout";
import siteMetaData from "../data/siteMetaData";
import Hand from "../data/assets/images/hand.png";
import Image from "next/image";

const contact = () => {
  const { location, authorBio, email, openToOpportunity } = siteMetaData;

  return (
    <Layout>
      <main className="mt-10 w-full md:flex md:items-center md:justify-center">
        <article className="w-full space-y-5 font-medium md:w-1/2">
          <div>
            <h1 className="mb-1 text-2xl tracking-wide  md:text-4xl">
              Reach Out to me!
            </h1>
            <p className="text-sm uppercase text-text-light-color md:text-base">
              discuss a project or just want to say Hi, my inbox is open for
              everyone 😁
            </p>
          </div>
          <p className="my-4 text-2xl font-semibold">{authorBio}</p>
          <div className="flex  flex-col justify-center">
            <span>📍 {location}</span>
            <p className="mt-1">
              Open for opportunities: <span>{openToOpportunity}</span>
            </p>
          </div>
          <p>
            Ping me at:{" "}
            <span className="font-semibold tracking-wide text-button-light-color underline">
              {email}
            </span>
          </p>
        </article>
        <article className="w-full md:w-1/2">
          <Image
            width={1000}
            height={600}
            src={Hand}
            alt="hand 3d image in DevFolio"
          />
        </article>
      </main>
    </Layout>
  );
};

export default contact;
