import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import deved from "../../../public/dev-ed-wave.png";
import rith from "../../../public/rith.png";
import code from "../../../public/code.png";
import design from "../../../public/design.png";
import consulting from "../../../public/consulting.png";
import web1 from "../../../public/web1.png";
import web2 from "../../../public/web2.png";
import web3 from "../../../public/web3.png";
import web4 from "../../../public/web4.png";
import web5 from "../../../public/web5.png";
import web6 from "../../../public/web6.png";

const HomeLayout = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "abc4856b-3af9-4c3f-8f45-17e199dc152b");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">rithdev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
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
              Freelancer providing services for programming, cutting-edge AR
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
              As a freelance software engineer and AR developer, I&rsquo;ve
              gained valuable experience working in both
              <span className="text-teal-500"> startup</span> and{" "}
              <span className="text-teal-500">corporate (MNC)</span>{" "}
              environments. My journey includes hands-on roles in software
              development, project management, and providing solutions for
              clients. I&rsquo;ve honed my skills in crafting digital products
              tailored to the unique needs of businesses and consumers. With
              expertise in software engineering and augmented reality (AR)
              development, and 3D character modeling, I&rsquo;m well-equipped to
              deliver innovative solutions for your projects and initiatives.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including{" "}
              <span className="text-teal-500">
                augmented reality (AR) development
              </span>
              , <span className="text-teal-500">programming</span> and{" "}
              <span className="text-teal-500">3D modeling</span>.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Instagram Filter
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great web apps or mobile apps?
                Let&rsquo;s make it a reality.
              </p>
              <h4 className="py-4 text-teal-600">Programming Tools I Use</h4>
              <p className="text-gray-800 py-1">React/Next Js</p>
              <p className="text-gray-800 py-1">Node Js</p>
              <p className="text-gray-800 py-1">Flutter</p>
              <p className="text-gray-800 py-1">MySQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                3d Character Design
              </h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&rsquo;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
        </section>

        <section>
          <h1>React File Upload Form</h1>
          <form onSubmit={onSubmit}>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
            <input type="submit" />
          </form>
          <span>{result}</span>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
