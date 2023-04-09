import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import JobSection from "../JobSection/JobSection";
import Features from "../Features/Features";

const Home = () => {
  return (
    <div className="w-full lg:w-5/6 mx-auto">
      <Header></Header>
      <Banner></Banner>
      <JobSection></JobSection>
      <Features></Features>
    </div>
  );
};

export default Home;
