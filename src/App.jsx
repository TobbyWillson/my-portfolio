import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from "react-router-dom";
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

const RootLayout = () => {
  const date = new Date();
  const year = date.getFullYear();

  const isDark = useTheme();
  return (
    <>
      <ScrollToTop />
      {/* <ScrollToTop /> */}
      <div className='select-none'>
        <header className=''>
          <Navbar />
        </header>

        <div className='bg-background text-bg-text  transition-all duration-700'>
          <main className='max-w-7xl mx-auto py-10 px-5'>
            <Outlet />
          </main>
        </div>

        <footer className='bg-background text-bg-text border border-border-gray border-x-0'>
          <div className='max-w-7xl mx-auto p-10'>
            <Footer />
          </div>

          {/* Footer Footer */}
          <div className=' flex justify-center pt-15 pb-20 md:pb-35 border border-border-gray border-x-0 bg-gray-50 dark:bg-[#364153]'>
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
