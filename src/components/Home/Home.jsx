import React from "react";
import Banner from "../Banner/Banner";
import JobSection from "../JobSection/JobSection";
import Features from "../Features/Features";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const features = useLoaderData();
  return (
    <>
      <Banner></Banner>
      <JobSection></JobSection>
      <Features features={features}></Features>
    </>
  );
};

export default Home;
