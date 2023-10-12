import Head from "next/head";
import React from "react";
import HomeLayout from "@/components/HomeLayout";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Rith Portfolio</title>
        <meta name="description" content="Generated by create next app"></meta>
        <link rel="icon" href="/" />
      </Head>
      <HomeLayout />
    </div>
  );
}