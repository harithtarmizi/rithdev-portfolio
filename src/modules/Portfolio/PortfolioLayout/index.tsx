import { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import useDarkMode from "@/store/darkMode";
import { useRouter } from "next/router";
import { BsFillMoonStarsFill } from "react-icons/bs";
import logo from "../../../../public/rith.png";

const PortfolioLayout = ({ children }: { children: ReactNode }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <nav className="bg-white border-gray-200 dark:text-white dark:bg-gray-900 pb-0 pt-10 sm:pb-10">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                className="h-8 mr-3"
                alt="Flowbite Logo"
                width={32}
                height={32}
              />
              <span className="font-burtons text-xl dark:text-white">
                rithdev
              </span>
            </Link>
            <div className="flex items-center md:order-2">
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={toggleDarkMode}
                    className="cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="ml-8 text-white dark:text-black bg-gray-600 hover:bg-gray-800 font-medium rounded-lg px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-white dark:hover:bg-white dark:focus:ring-gray-600 focus:outline-none"
                  >
                    Home
                  </Link>
                </li>
              </ul>
              <button
                onClick={toggleMenu}
                data-collapse-toggle="mega-menu-icons"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mega-menu-icons"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              id="mega-menu-icons"
              className={`${
                menuOpen ? "block" : "hidden"
              } items-center justify-between  w-full md:flex md:w-auto md:order-1`}
            >
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <Link
                    href="/portfolio/augmented-reality"
                    className={`block py-2 pl-3 pr-4 text-gray-900 border-b md:border-0 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover-text-gray-700 dark:hover-text-gray-700 dark:hover:bg-gray-700 md:dark:hover-bg-transparent dark:border-gray-700 ${
                      router.pathname === "/portfolio/augmented-reality"
                        ? "font-semibold md:border-b-4 "
                        : ""
                    }`}
                    aria-current="page"
                  >
                    AR
                  </Link>
                </li>

                <li>
                  <Link
                    href="/portfolio/software-development"
                    className={`block py-2 pl-3 pr-4 text-gray-900 border-b md:border-0 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover-text-gray-700 dark:hover-text-gray-700 dark:hover:bg-gray-700 md:dark:hover-bg-transparent dark:border-gray-700 ${
                      router.pathname === "/portfolio/software-development"
                        ? "font-semibold md:border-b-4 "
                        : ""
                    }`}
                    aria-current="page"
                  >
                    Software Development
                  </Link>
                </li>

                <li>
                  <Link
                    href="/portfolio/3d-design"
                    className={`block py-2 pl-3 pr-4 text-gray-900 border-b md:border-0 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover-text-gray-700 dark:hover-text-gray-700 dark:hover:bg-gray-700 md:dark:hover-bg-transparent dark:border-gray-700 ${
                      router.pathname === "/portfolio/3d-design"
                        ? "font-semibold md:border-b-4 "
                        : ""
                    }`}
                    aria-current="page"
                  >
                    3D Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </main>

      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Elevate Your Tech Vision with Me!
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Ready to turn your tech dreams into reality? Let&rsquo;s chat and
            make your vision a digital masterpiece. Reach out now!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="/#contact"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white dark:text-black rounded-lg bg-gray-600 hover:bg-gray-800 focus:ring-4 dark:bg-white dark:hover:bg-white dark:focus:ring-gray-600"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <Footer className="fixed" />
    </div>
  );
};

export default PortfolioLayout;
