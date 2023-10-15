import Head from "next/head";
import React from "react";
import Credential from "@/components/ProjectCard";

export default function CredentialsPage() {
  return (
    <div>
      <Head>
        <title>Credentials</title>
        <meta name="description" content="Generated by create next app"></meta>
        <link rel="icon" href="/" />
      </Head>
      <Credential />
    </div>
  );
}
