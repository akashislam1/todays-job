import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import JobSection from "../JobSection/JobSection";

const Home = () => {
  return (
    <div className="w-full lg:w-5/6 mx-auto">
      <Header></Header>
      <Banner></Banner>
      <JobSection></JobSection>
    </div>
  );
};

export default Home;
