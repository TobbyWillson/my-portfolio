import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, useLocation } from "react-router-dom";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/poppins";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import { useTheme } from "./Components/ThemeContext";
import ScrollToTop from "./Components/ScrollToTop";
import { Helmet } from "react-helmet-async";
import BackToTop from "./Components/BackToTop";

const RootLayout = () => {
  const date = new Date();
  const year = date.getFullYear();

  const isDark = useTheme();

  const pathName = useLocation().pathname;

  // Define dynamic content based on the path
  const pathTitle = () => {
    if (pathName === "/" || pathName === "/home") {
      return "Tobby Willson | Portofilio";
    } else if (pathName === "/about") {
      return "About Me | Portfolio";
    } else if (pathName === "/contact") {
      return "Contact Me | Portfolio";
    } else {
      return "Tobby Willson | Portfolio";
    }
  };

  const pathDesc = () => {
    if (pathName === "/" || pathName === "/home") {
      return "This is the official portfolio of Tobby Willson, a frontend developer based in Nigeria. Showcasing his amazing skills in various frontend tools and also his past projects.";
    } else if (pathName === "/about") {
      return "This is the page where you get to know more about Tobby Willson, what he does, and how well he does it.";
    } else if (pathName === "/contact") {
      return "This is the contact page Tobby Willson's Portfolio website where you get in touch with him on various reasons such as Website design, collaboration, etc. ";
    } else {
      return "This is the official portfolio of Tobby Willson, a frontend developer based in Nigeria. Showcasing his amazing skills in various frontend tools and also his past projects.";
    }
  };

  return (
    <>
      <ScrollToTop />
      <Helmet>
        <title>{pathTitle()}</title>
        <meta name='description' content={pathDesc()} />
      </Helmet>
      {/* <ScrollToTop /> */}
      <div className='select-none'>
        <header className=''>
          <Navbar />
        </header>

        <div className='bg-background text-bg-text  transition-all duration-700'>
          <main className='max-w-7xl mx-auto py-10 px-10'>
            <Outlet />
            <BackToTop />
          </main>
        </div>

        <footer className='bg-background text-bg-text border border-border-gray border-x-0'>
          <div className='max-w-7xl mx-auto p-10'>
            <Footer />
          </div>

          {/* Footer Footer */}
          <div className=' flex justify-center pt-15 pb-20 md:pb-35 border border-border-gray border-x-0 bg-gray-50 dark:bg-[#171b22]'>
            <p className='font-semibold tracking-wider text-[12px]'>&copy; {year} tobbywillson. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      {/* My old method of defining index route */}
      <Route index element={<Home />} />
      {/* New Method */}
      <Route path='about' element={<AboutMe />} />
      <Route path='contact' element={<Contact />} />

      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
