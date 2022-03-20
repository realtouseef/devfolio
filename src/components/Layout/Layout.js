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
      <main className="max-w-4xl mx-auto px-4">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
