import React from "react";
import Hero from "../components/Hero";
import WhyEEC from "../components/WhyEEC";
import Highlights from "../components/Highlights";
import Features from "./Features";
import UserCentric from "../components/UserCentric";
import TopBar from "../components/TopBar";
import Contact from "../components/Contact";
import HeroEEC from "../components/HeroEEC";
import { Helmet } from "react-helmet";
// Footer stays in App

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Electronic Educare | School ERP & LMS Platform</title>
        <meta name="description" content="Educare provides academic resources for educators worldwide." />
        <meta property="og:title" content="Electronic Educare | School ERP & LMS Platform" />
        <meta property="og:description" content="Educare provides academic resources for educators worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo_new.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* <TopBar /> */}
      <Hero />
      <WhyEEC />
      {/* <Highlights /> */}
      {/* <Features+ /> */}
      <UserCentric />
      <HeroEEC />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
