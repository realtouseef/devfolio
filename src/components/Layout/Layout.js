import Navbar from "../Nav/Navbar";
import Footer from "../Footer/Footer";
import Head from "next/head";
import siteMetaData from "../../data/siteMetaData";

const Layout = ({ children }) => {
  const { title, description, language } = siteMetaData;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="language" content={language} />
        <link rel="favicon" href="../../../public/favicon.ico" />
      </Head>
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
