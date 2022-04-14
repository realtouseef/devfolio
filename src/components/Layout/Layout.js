import Navbar from "../Nav/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
