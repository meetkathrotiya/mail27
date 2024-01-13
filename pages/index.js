import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/layouts/layout";
import Faqscomp from "../src/components/Astrodev/Faqcomp";
import Addarticles from "../src/components/Astrodev/Articlescomp";
import Benifitscomp from "../src/components/Astrodev/Benifitscomp";
import UserReflectioncomp from "../src/components/Astrodev/UserReflectioncomp";
import Student from "../src/app/studentlist/page";

export default function Dashboard() {
  const [openDashboard, setOpenDashboard] = useState(false);
  return (
    <>
      <Head>
        <title>Becho</title>
        <meta name="description" content="Becho dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout container>
        <div className="grid w-full md:max-w-full max-w-[500px] mx-auto md:grid-cols-2 grid-cols-1 xl:gap-10 gap-6 xl:mt-10 mt-3">
          <div className="bg-primary-light dark:bg-white/5 xl:p-6 p-4 xl:h-[500px] md:h-[400px] h-[340px] overflow-y-auto rounded-lg border-slate-200 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.10)] faq-comp">
            <Faqscomp />
          </div>
          <div className="bg-primary-light dark:bg-white/5 xl:p-6 p-4 xl:h-[500px] md:h-[400px] h-[340px] overflow-y-auto rounded-lg border-slate-200 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.10)] faq-comp">
            <Addarticles />
          </div>
          <div className="bg-primary-light dark:bg-white/5 xl:p-6 p-4 xl:h-[500px] md:h-[400px] h-[340px] overflow-y-auto rounded-lg border-slate-200 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.10)] faq-comp">
            <Benifitscomp />
          </div>
          <div className="bg-primary-light dark:bg-white/5 xl:p-6 p-4 xl:h-[500px] md:h-[400px] h-[340px] overflow-y-auto rounded-lg border-slate-200 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.10)] faq-comp">
            <UserReflectioncomp />
          </div>
        </div>
      </Layout>

      <Student />

    </>
  );
}
