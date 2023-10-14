import React from "react";
import Link from "next/link";
import Image from "next/image";
import PortfolioLayout from "../PortfolioLayout";
import web1 from "../../../../public/web1.png";
import web2 from "../../../../public/web2.png";
import web6 from "../../../../public/web6.png";

const AugmentedReality = () => {
  return (
    <PortfolioLayout>
      <section className="py-10">
        <div>
          <h3 className="text-3xl py-1 dark:text-white ">Spark AR by META</h3>
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
            <Link href="#">
              <Image
                className="rounded-t-lg"
                src={web1}
                width={900}
                alt="ar project"
              />
            </Link>
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Augmented Reality (AR) Project
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white dark:text-black bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-white dark:focus:ring-gray-600"
              >
                Demo project
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
            <Link href="#">
              <Image
                className="rounded-t-lg"
                src={web2}
                width={900}
                alt="software project"
              />
            </Link>
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Software Development Project
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white dark:text-black bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-white dark:focus:ring-gray-600"
              >
                Demo project
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
            <Link href="#">
              <Image
                className="rounded-t-lg"
                src={web6}
                width={900}
                alt="blender project"
              />
            </Link>
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  3D Character Design Project
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white dark:text-black bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-white dark:focus:ring-gray-600"
              >
                Demo project
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
    </PortfolioLayout>
  );
};

export default AugmentedReality;
