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
      </Head>
      <main className="flex flex-col min-h-screen mx-auto max-w-5xl px-4">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
