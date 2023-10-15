import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import deved from "../../../public/dev-ed-wave.png";
import code from "../../../public/code.png";
import arfilter from "../../../public/arfilter.png";
import design from "../../../public/design.png";
import web1 from "../../../public/web1.png";
import web2 from "../../../public/web2.png";
import web6 from "../../../public/web6.png";
// import logo from "../../../public/rith.png";

const Home = () => {
  const contactRef = useRef<HTMLDivElement | null>();

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const apiKey: string = process.env.PUBLIC_ACCESS_KEY
    ? process.env.PUBLIC_ACCESS_KEY
    : "abc4856b-3af9-4c3f-8f45-17e199dc152b";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Rith Inc",
      subject: "Enquiry from your website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#contact" && contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-0 sm:mb-12 flex justify-between dark:text-white">
            <Link href="/" className="flex items-center">
              {/* <Image
                src={logo}
                className="h-8 mr-3"
                alt="rithdev"
                width={32}
                height={32}
              /> */}
              <h1 className="font-burtons text-xl">rithdev</h1>
            </Link>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <Link
                  href={"/portfolio/software-development"}
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-9 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Harith Tarmizi
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer, AR Developer & 3D Modeler
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md-text-xl max-w-xl mx-auto">
              Freelancer providing services for programming, exceptional AR
              experiences, and 3D character design. Join me down below and
              let&rsquo;s get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96">
              <Image
                src={deved}
                layout="fill"
                objectFit="cover"
                alt="profile"
              />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Meet your friendly neighborhood tech wizard! I&rsquo;ve journeyed
              through the wild startup jungles and establish corporations, and
              I&rsquo;m here to turn your tech dreams into delightful reality.
              Whether it&rsquo;s
              <span className="text-teal-500"> writing code</span> that grooves
              or bringing
              <span className="text-teal-500"> Augmented Reality(AR) </span>
              enchantments to life, I&rsquo;m the one for the job. Oh, and did I
              mention I moonlight as a
              <span className="text-teal-500"> 3D character</span> artist? So,
              let&rsquo;s add some fun and flair to your projects - it&rsquo;s
              all part of the magic I bring to the digital circus! 🚀🎩🤹‍♂️
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-white dark:bg-gray-800 dark:border-gray-700 flex-1">
              <Image
                src={arfilter}
                width={100}
                height={100}
                alt="ar filter"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Instagram Filter
              </h3>
              <p className="text-gray-800 dark:text-white py-1">
                Ever wondered what it&rsquo;s like to be a pickle with
                sunglasses? Or perhaps a disco-loving unicorn? My
                <span className="text-teal-500"> AR filters</span> will turn
                your selfies into hilarious adventures. Just be careful - you
                might get addicted to your newfound silliness. Warning: Side
                effects may include uncontrollable giggles and an increase in
                Instagram followers.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-white dark:bg-gray-800 dark:border-gray-700 flex-1">
              <Image
                src={code}
                width={100}
                height={100}
                alt="code"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="dark:text-white py-1">
                I build <span className="text-teal-500">web apps</span> and
                <span className="text-teal-500"> mobile apps</span> that are so
                user-friendly, even your grandma can navigate them blindfolded.
                My code is so clean that it makes your favorite cleaning
                detergent jealous. Expect apps so intuitive, they practically
                read your mind. Now, when your app works like a charm,
                don&rsquo;t forget to thank the magical fingers behind it -
                that&rsquo;s me!
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-white dark:bg-gray-800 dark:border-gray-700 flex-1">
              <Image
                src={design}
                width={100}
                height={100}
                alt="3d design"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                3d Character Design
              </h3>
              <p className="dark:text-white py-1">
                I&rsquo;m your{" "}
                <span className="text-teal-500">3D character</span> sorcerer!
                Whether it&rsquo;s fantastical creatures, quirky characters, or
                epic avatars, I bring them to life in the digital realm. Prepare
                to meet charming digital companions that&rsquo;ll steal your
                heart (and maybe your wallet if they could!). Let&rsquo;s turn
                your character dreams into whimsical reality together!
              </p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Welcome to my enchanted digital playground, where creativity meets
              code, and imagination knows no bounds. Explore my world of AR
              filters, web applications, mobile apps, and 3D character wonders.
              Get ready to embark on a whimsical journey through the pixels and
              polygons of my work!
            </p>
          </div>
          <div className="lg:flex gap-20 justify-center">
            <div className="bg-white border my-10 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href="/portfolio/augmented-reality">
                <Image
                  className="rounded-t-lg"
                  src={web1}
                  width={900}
                  alt="ar project"
                />
              </Link>
              <div className="p-5">
                <Link href="/portfolio/augmented-reality">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Augmented Reality (AR) Project
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Link
                  href="/portfolio/augmented-reality"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white dark:text-black bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-white dark:focus:ring-gray-600"
                >
                  Explore more
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
              </div>
            </div>
            <div className="bg-white border my-10 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href="/portfolio/software-development">
                <Image
                  className="rounded-t-lg"
                  src={web2}
                  width={900}
                  alt="software project"
                />
              </Link>
              <div className="p-5">
                <Link href="/portfolio/software-development">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Software Development Project
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Link
                  href="/portfolio/software-development"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white dark:text-black bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-white dark:focus:ring-gray-600"
                >
                  Explore more
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
              </div>
            </div>
            <div className="bg-white border my-10 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href="/portfolio/3d-design">
                <Image
                  className="rounded-t-lg"
                  src={web6}
                  width={900}
                  alt="blender project"
                />
              </Link>
              <div className="p-5">
                <Link href="/portfolio/3d-design">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    3D Character Design Project
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Link
                  href="/portfolio/3d-design"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white dark:text-black bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-white dark:focus:ring-gray-600"
                >
                  Explore more
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
              </div>
            </div>
          </div>
        </section>

        <section
          id="#contact"
          ref={contactRef as React.RefObject<HTMLDivElement>}
        >
          <h3 className="text-3xl py-1 dark:text-white ">Contact</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5 pb-10">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}
            ></input>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 focus:ring-transparent  ${
                  errors.name
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80,
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{(errors.name as FieldError).message}</small>
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 focus:ring-transparent ${
                  errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{(errors.email as FieldError).message}</small>
                </div>
              )}
            </div>

            <div className="mb-3">
              <textarea
                placeholder="Your Message"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900 rounded-md outline-none h-36 focus:ring-4 focus:ring-transparent ${
                  errors.message
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("message", {
                  required: "Enter your Message",
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  <small>{(errors.message as FieldError).message}</small>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 font-semibold text-white transition-colors bg-gray-600 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
            >
              {isSubmitting ? (
                <svg
                  className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {isSubmitSuccessful && isSuccess && (
            <div className="pb-5 text-sm text-center text-green-500">
              {message || "Success. Message sent successfully"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="pb-5 text-sm text-center text-red-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
        </section>
      </main>

      <footer className="px-10 md:px-20 lg:px-40 bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-white">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            Rithdev™
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Home;
